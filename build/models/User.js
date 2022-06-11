"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../database/sequelize.js");

var _Role = require("./Role");

var Users = _sequelize2.sequelize.define("users", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false,
    isAlphanumeric: true
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false,
    isEmail: true
  },
  password: {
    type: _sequelize.DataTypes.STRING(64),
    is: /^[0-9a-f]{64}$/i,
    require: true,
    allowNull: false
  }
}, {
  timestamps: true
});

exports.Users = Users;
Users.hasMany(_Role.Role, {
  foreignKey: "role_id",
  suorceKey: "id"
});

_Role.Role.belongsTo(Users, {
  foreignKey: "role_id",
  targetId: "id"
});
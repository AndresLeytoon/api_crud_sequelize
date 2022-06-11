"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Role = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../database/sequelize.js");

var Role = _sequelize2.sequelize.define("roles", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false,
    isAlphanumeric: true,
    validate: {
      notNull: {
        msn: "el usuario ya existe"
      }
    }
  }
}, {
  timestamps: true
});

exports.Role = Role;
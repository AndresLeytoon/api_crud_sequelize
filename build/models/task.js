"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../database/sequelize.js");

var Task = _sequelize2.sequelize.define("task", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING
  },
  done: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true
});

exports.Task = Task;
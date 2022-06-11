"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../database/sequelize.js");

var _task = require("./task");

var Project = _sequelize2.sequelize.define("projects", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  prioriry: {
    type: _sequelize.DataTypes.INTEGER
  },
  descripcion: {
    type: _sequelize.DataTypes.TEXT
  }
}, {
  timestamps: true
});

exports.Project = Project;
Project.hasMany(_task.Task, {
  foreignKey: "project_id",
  suorceKey: "id"
});

_task.Task.belongsTo(Project, {
  foreignKey: "project_id",
  targetId: "id"
});
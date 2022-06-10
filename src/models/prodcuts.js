import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";
import { Task } from "./task";

export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    prioriry: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);
Project.hasMany(Task, {
  foreignKey: "project_id", 
  suorceKey: "id",
});
Task.belongsTo(Project, {
  foreignKey: "project_id", 
  targetId: "id",
});

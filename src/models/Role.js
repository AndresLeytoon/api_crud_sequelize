import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";

export const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isAlphanumeric: true,
      validate: {
        notNull: {
          msn: "el usuario ya existe",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

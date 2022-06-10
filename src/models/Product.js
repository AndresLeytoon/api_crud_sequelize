import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";

export const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    imgURL: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,

  }
);


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
      allowNull: false,
      unique: true,
     
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true,
    },
  },
  {
    timestamps: true,
  },
  
);

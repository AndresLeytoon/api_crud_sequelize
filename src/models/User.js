import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize.js";
import { Role } from "./Role";

export const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isAlphanumeric: true,
     
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i,
      require: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
  
);
Users.hasMany(Role, {
  foreignKey: "role_id",
  suorceKey: "id",
});
Role.belongsTo(Users, {
  foreignKey: "role_id",
  targetId: "id",
});

 

 

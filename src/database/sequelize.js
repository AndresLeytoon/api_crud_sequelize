import Sequelize from "sequelize";

export const sequelize = new Sequelize("crud_db", "postgres", "Leyton@1208", {
  host: "localhost",
  dialect: "postgres",
});

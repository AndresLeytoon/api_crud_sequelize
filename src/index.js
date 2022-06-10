import app from "./app";
import { sequelize } from "./database/sequelize";
import "./models/prodcuts";
import "./models/task";
import "./models/Product";

async function main() {
  try {
    await sequelize.sync({ force: false});  
    app.listen(3000);
    console.log("aerver on port", 3000);
  } catch (error) {
    console.log("do not to database", error);
  }
}
main();

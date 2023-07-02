const { Sequelize, DataTypes, Model } = require("sequelize");

const db_name = "db_ktpm";
const user_name = "root";
const password = "daominh";
const db_config = {
  port: 3306,
  host: "localhost",
  dialect: "mysql",
};

const sequelize = new Sequelize(db_name, user_name, password, db_config);
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connection();

module.exports = sequelize;

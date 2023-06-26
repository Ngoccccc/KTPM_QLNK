const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const User = conn.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    soCCCD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);

conn
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = User;

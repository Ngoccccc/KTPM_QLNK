const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const Thuoc = conn.define(
  "Thuoc",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    soCCCD: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "Thuoc",
  }
);

conn
  .sync()
  .then(() => {
    console.log("Thuoc table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Thuoc;

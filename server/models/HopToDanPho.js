const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const HopToDanPho = conn.define(
  "HopToDanPho",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    thoiGianBatDau: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    diaDiem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "hoptodanpho",
  }
);

conn
  .sync()
  .then(() => {
    console.log("HopToDanPho table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = HopToDanPho;

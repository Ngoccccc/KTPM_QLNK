const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const SoHoKhau = conn.define("SoHoKhau", {
  soHoKhau: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  soNha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duongPho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phuong: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ngayTao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

conn
  .sync()
  .then(() => {
    console.log("SoHoKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = SoHoKhau;

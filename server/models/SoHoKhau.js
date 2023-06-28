const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const SoHoKhau = conn.define(
  "SoHoKhau",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      validate: {
        notEmpty: true,
      },
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
  },
  {
    tableName: "sohokhau",
  }
);

conn
  .sync()
  .then(() => {
    console.log("SoHoKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
// SoHoKhau.create({
//   soHoKhau: 2,
//   soNha: 37,
//   duongPho: "LacTung",
//   phuong: "VinhTuy",
//   quan: "HaiBaTrung",
// });
module.exports = SoHoKhau;

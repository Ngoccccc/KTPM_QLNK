const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const ChuHo = conn.define(
  "ChuHo",
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
    tableName: "chuho",
  }
);

conn
  .sync()
  .then(() => {
    console.log("ChuHo table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = ChuHo;

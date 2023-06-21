const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");

const ThayDoiNhanKhau = conn.define("ThayDoiNhanKhau", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  soCCCD: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  loaiThayDoi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

conn
  .sync()
  .then(() => {
    console.log("ThayDoiNhanKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = ThayDoiNhanKhau;

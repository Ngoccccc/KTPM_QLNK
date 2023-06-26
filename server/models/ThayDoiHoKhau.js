const { DataTypes } = require("sequelize");

const conn = require("./connectDB");

const ThayDoiHoKhau = conn.define(
  "ThayDoiHoKhau",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    loaiThayDoi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ngayThayDoi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    chiTietThayDoi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "thaydoihokhau",
  }
);

conn
  .sync()
  .then(() => {
    console.log("ThayDoiHoKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = ThayDoiHoKhau;

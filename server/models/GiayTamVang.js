const { Sequelize, DataTypes, Model } = require("sequelize");
const NhanKhau = require("./NhanKhau");
const SoHoKhau = require("./SoHoKhau");
const conn = require("./connectDB");
const GiayTamVang = conn.define(
  "GiayTamVang",
  {
    diaChiThuongChu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hoKhauTamVang: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: SoHoKhau,
        key: "soHoKhau",
      },
    },
    soCCCD: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: NhanKhau,
        key: "soCCCD",
      },
    },
    ngayBatDau: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ngayKetThuc: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ngayDangKi: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lyDoTamVang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "giaytamvang",
  }
);

conn
  .sync()
  .then(() => {
    console.log("GiayTamVang  table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = GiayTamVang;

const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const NhanKhau = conn.define("NhanKhau", {
  hoTen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biDanh: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gioiTinh: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ngayThangNamSinh: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  noiSinh: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nguyenQuan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dantoc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quocTich: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ngheNghiep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noiLamViec: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  soCCCD: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ngayCap: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  noiCap: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quanHeVoiChuHo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

conn
  .sync()
  .then(() => {
    console.log("NhanKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = NhanKhau;

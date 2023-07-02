const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");

const GiayTamTru = conn.define("GiayTamTru", {
  diaChiThuongChu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hoKhauTamTru: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  soCCCD: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  lyDoTamTru: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

conn
  .sync()
  .then(() => {
    console.log("GiayTamTru table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = GiayTamTru;

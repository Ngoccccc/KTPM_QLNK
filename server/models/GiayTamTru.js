const { Sequelize, DataTypes, Model } = require("sequelize");

const NhanKhau = require("./NhanKhau");
const SoHoKhau = require("./SoHoKhau");
const conn = require("./connectDB");

const GiayTamTru = conn.define(
  "GiayTamTru",
  {
    diaChiThuongChu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hoKhauTamTru: {
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
    lyDoTamTru: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "giaytamtru",
  }
);
GiayTamTru.belongsTo(NhanKhau, {
  foreignKey: "soCCCD",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
GiayTamTru.belongsTo(SoHoKhau, {
  foreignKey: "hoKhauTamTru",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
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

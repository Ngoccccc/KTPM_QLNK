const { DataTypes } = require("sequelize");

const conn = require("./connectDB");
const SoHoKhau = require("./SoHoKhau");
const HopToDanPho = require("./HopToDanPho");
const HoThamGia = conn.define(
  "HoThamGia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      references: {
        model: HopToDanPho,
        key: "id",
      },
    },
    soHoKhau: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: SoHoKhau,
        key: "soHoKhau",
      },
    },
  },
  {
    tableName: "hothamgia",
  }
);
HoThamGia.belongsTo(SoHoKhau, {
  foreignKey: "soHoKhau",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
HoThamGia.belongsTo(HopToDanPho, {
  foreignKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

conn
  .sync()
  .then(() => {
    console.log("HoThamGia table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = HoThamGia;

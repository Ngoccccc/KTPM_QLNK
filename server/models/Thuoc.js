const { Sequelize, DataTypes, Model } = require("sequelize");
const SoHoKhau = require("./SoHoKhau");
const NhanKhau = require("./NhanKhau");
const conn = require("./connectDB");
const Thuoc = conn.define(
  "thuoc",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: SoHoKhau,
        key: "soHoKhau",
      },
    },
    soCCCD: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: NhanKhau,
        key: "soCCCD",
      },
    },
  },
  {
    tableName: "thuoc",
  }
);
Thuoc.belongsTo(SoHoKhau, {
  foreignKey: "soHoKhau",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Thuoc.belongsTo(NhanKhau, {
  foreignKey: "soCCCD",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
conn
  .sync()
  .then(() => {
    console.log("Thuoc table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Thuoc;

const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
// conn.query("");
const NhanKhau = require("./NhanKhau");
const SoHoKhau = require("./SoHoKhau");
const ChuHo = conn.define(
  "ChuHo",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: SoHoKhau,
        key: "soHoKhau",
      },
      allowNull: false,
    },
    soCCCD: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: NhanKhau,
        key: "soCCCD",
      },
      allowNull: false,
    },
  },
  {
    tableName: "chuho",
  }
);
ChuHo.belongsTo(SoHoKhau, {
  foreignKey: "soHoKhau",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
ChuHo.belongsTo(NhanKhau, {
  foreignKey: "soCCCD",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
conn
  .sync()
  .then(() => {
    console.log("ChuHo table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = ChuHo;

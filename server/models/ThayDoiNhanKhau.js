const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const NhanKhau = require("./NhanKhau");

const ThayDoiNhanKhau = conn.define(
  "ThayDoiNhanKhau",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
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
    loaiThayDoi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "thaydoinhankhau",
  }
);
ThayDoiNhanKhau.belongsTo(NhanKhau, {
  foreignKey: "soCCCD",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
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

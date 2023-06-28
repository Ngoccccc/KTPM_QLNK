const { DataTypes } = require("sequelize");

const SoHoKhau = require("./SoHoKhau");
const conn = require("./connectDB");

const ThayDoiHoKhau = conn.define(
  "ThayDoiHoKhau",
  {
    soHoKhau: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      references: {
        model: SoHoKhau,
        key: "soHoKhau",
      },
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
ThayDoiHoKhau.belongsTo(SoHoKhau, {
  foreignKey: "soHoKhau",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
conn
  .sync()
  .then(() => {
    console.log("ThayDoiHoKhau table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = ThayDoiHoKhau;

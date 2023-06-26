const { DataTypes } = require("sequelize");

const conn = require("./connectDB");
const HoThamGia = conn.define(
  "HoThamGia",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    soHoKhau: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "hothamgia",
  }
);

conn
  .sync()
  .then(() => {
    console.log("HoThamGia table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = HoThamGia;

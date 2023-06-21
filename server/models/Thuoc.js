const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const Thuoc = conn.define("Thuoc", {
  soHoKhau: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  soCCCD: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
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

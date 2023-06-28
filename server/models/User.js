const { Sequelize, DataTypes, Model } = require("sequelize");

const conn = require("./connectDB");
const NhanKhau = require("./NhanKhau");

const User = conn.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    soCCCD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
      references: {
        model: NhanKhau,
        key: "soCCCD",
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      required: true,
    },
    refeshtoken: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    tableName: "user",
    // timestamps: false,
  }
);
User.belongsTo(NhanKhau, {
  foreignKey: "soCCCD",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
conn
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = User;

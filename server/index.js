const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("db_ktpm", "root", "", {
    port: 3307,
    host: "localhost",
    dialect: "mysql",
});
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
connection();

module.exports = sequelize;
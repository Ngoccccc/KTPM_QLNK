const { Sequelize, DataTypes, Model } = require('sequelize');

const conn = require('../index')

const User = conn.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

conn.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
var express = require("express");
var NhanKhau = require("../models/NhanKhau");
var NhanKhau = require("../models/NhanKhau");
var ChuHo = require("../models/ChuHo");
var Thuoc = require("../models/Thuoc");
// var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { QueryTypes, where } = require("sequelize");

var router = express.Router();

// router.get("/", async function (req, res, next) {
//   try {
//     var arr = [];
//     (await NhanKhau.findAll()).forEach(function (item) {
//       arr.push(item);
//     });
//     res.json(arr);
//   } catch (error) {}
// });

router.get("/", async function (req, res, next) {
    try {
      var nhanKhau = await NhanKhau.findAll();
      res.json(nhanKhau);
    } catch (error) {
      res.status(500).json({ error: error });
    }
});



module.exports = router;
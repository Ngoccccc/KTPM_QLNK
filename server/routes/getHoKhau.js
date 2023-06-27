var express = require("express");
var SoHoKhau = require("../models/SoHoKhau");
var NhanKhau = require("../models/NhanKhau");
var Thuoc = require("../models/Thuoc");
var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { where } = require("sequelize");

var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    var arr = [];
    (await SoHoKhau.findAll()).forEach(function (item) {
      arr.push(item);
    });
    res.json(arr);
  } catch (error) {}
});
router.post("/", async function (req, res, next) {
  try {
    var result = await SoHoKhau.findOne({
      where: { soHoKhau: req.body.soHoKhau },
    });
    if (result != null) {
      res.json({ result, status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    res.json({ status: false });
  }
});
router.post("/themnguoi", async function (req, res, next) {
  try {
    console.log();
    await NhanKhau.create(req.body.nhanKhau);
    await Thuoc.create({
      soHoKhau: req.body.soHoKhau,
      soCCCD: req.body.nhanKhau.soCCCD,
    });
    res.json({ status: true });
  } catch (error) {
    res.json({
      status: error.errors[0].message,
    });
  }
});
module.exports = router;

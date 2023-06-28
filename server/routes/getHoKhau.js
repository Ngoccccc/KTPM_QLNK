var express = require("express");
var SoHoKhau = require("../models/SoHoKhau");
var NhanKhau = require("../models/NhanKhau");
var ChuHo = require("../models/ChuHo");
var Thuoc = require("../models/Thuoc");
// var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { QueryTypes } = require("sequelize");

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
    let nhanKhauSoCCCD = await conn.query(
      "select soCCCD from thuoc where soHoKhau = :soHoKhau",
      {
        replacements: { soHoKhau: req.body.soHoKhau },
        type: QueryTypes.SELECT,
      }
    );
    let arrayCCCD = [];
    nhanKhauSoCCCD.forEach(function (element) {
      arrayCCCD.push(element.soCCCD);
    });
    let nhanKhau = await NhanKhau.findAll({
      where: {
        soCCCD: arrayCCCD,
      },
    });
    if (result != null) {
      res.json({ hoKhau: result, nhanKhau, status: true });
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
    if (req.body.soHoKhau) {
      await NhanKhau.create(req.body.nhanKhau);
      await Thuoc.create({
        soHoKhau: req.body.soHoKhau,
        soCCCD: req.body.nhanKhau.soCCCD,
      });
      if (req.body.nhanKhau.quanHeVoiChuHo == "Chủ hộ") {
        await ChuHo.create({
          soHoKhau: req.body.soHoKhau,
          soCCCD: req.body.nhanKhau.soCCCD,
        });
      }
      res.json({ status: true });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({
      status: false,
    });
  }
});
router.post("/tachhokhau", async function (req, res, next) {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(400);
    res.json({
      status: error.errors[0].message,
    });
  }
});
module.exports = router;

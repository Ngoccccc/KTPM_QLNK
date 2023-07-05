var express = require("express");
var NhanKhau = require("../models/NhanKhau");
var NhanKhau = require("../models/NhanKhau");
var HopToDanPho = require("../models/HopToDanPho");
var HoThamGia = require("../models/HoThamGia");
var SoHoKhau = require("../models/SoHoKhau");

var ChuHo = require("../models/ChuHo");
var Thuoc = require("../models/Thuoc");
// var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { QueryTypes, where } = require("sequelize");
const sequelize = require("sequelize");

var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const year = req.body.year;

    var result = await HopToDanPho.findAll({
      // where: sequelize.where(
      //     sequelize.fn("YEAR", sequelize.col("thoiGianBatDau")),
      //     year
      //   ),
    });

    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/xem", async function (req, res, next) {
  try {
    const id_hop = req.body.id;

    var result = await HopToDanPho.findOne({
      where: { id: id_hop },
    });

    if (result) {
      var result_hoThamGia = await HoThamGia.findAll({
        where: { id: id_hop },
      });
      if (result_hoThamGia) {
        result.dataValues.hoThamGia = result_hoThamGia;
        for (var i = 0; i < result_hoThamGia.length; i++) {
          var chuHoThamGia = await conn.query(
            "select nk.* from nhankhau nk, chuho ch where nk.soCCCD = ch.soCCCD and ch.soHoKhau = " +
              result_hoThamGia[i].dataValues.soHoKhau
          );
          result.dataValues.hoThamGia[i].dataValues.chuHo = chuHoThamGia[0][0];
        }
      }
    }
    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/thamgia", async function (req, res, next) {
  try {
    const id_hop = req.body.id;
    const soCCCD = req.body.soCCCD;

    var result = await HopToDanPho.findOne({
      where: { id: id_hop },
    });

    if (result !== null) {
      var result_hoKhauNguoiThamGia = await Thuoc.findOne({
        where: { soCCCD: soCCCD },
      });
      const tmp = result_hoKhauNguoiThamGia.soHoKhau;
      const found = await HoThamGia.findOne({
        where: { id: id_hop, soHoKhau: tmp },
      });
      if (found === null && tmp !== null) {
        const them = await HoThamGia.create({
          id: id_hop,
          soHoKhau: tmp,
        });
        res.json({ message: "Da them ho tham gia hop" });
      } else {
        res.json({ message: "Da ton tai ho tham gia hop" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/tao", async function (req, res, next) {
  try {
    const thoiGianBatDau = req.body.thoiGianBatDau;
    const thoiGianKetThuc = req.body.thoiGianKetThuc;
    const diaDiem = req.body.diaDiem;
    const noiDung = req.body.noiDung;

    // Create a new instance of GiayTamTru
    const thongbao = await HopToDanPho.create({
      thoiGianBatDau,
      thoiGianKetThuc,
      diaDiem,
      noiDung,
    });

    // Data added successfully
    res.json({ message: "Done" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.get("/binhbau", async function (req, res, next) {
  try {
    let result = await conn.query(
      "Select soHoKhau, count(id) solan from hothamgia group by soHoKhau"
    );
    if (result !== null) {
      res.json(result.at(0));
    } else {
      res.json({ message: "Khong tim thay" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/sua", async function (req, res, next) {
  try {
    let result = await HopToDanPho.update(
      {
        thoiGianBatDau: req.body.thoiGianBatDau,
        thoiGianKetThuc: req.body.thoiGianKetThuc,
        noiDung: req.body.noiDung,
        diaDiem: req.body.diaDiem,
      },
      {
        where: { id: req.body.id },
      }
    );
    if (result !== null) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
});
module.exports = router;

var express = require("express");
var NhanKhau = require("../models/NhanKhau");
var NhanKhau = require("../models/NhanKhau");
var HopToDanPho = require("../models/HopToDanPho");


var ChuHo = require("../models/ChuHo");
var Thuoc = require("../models/Thuoc");
// var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { QueryTypes, where } = require("sequelize");
const sequelize = require("sequelize");

var router = express.Router();

  
router.get('/', async function (req, res, next) {
  try {
    const year = req.body.year;

    var result = await HopToDanPho.findAll({
        where: sequelize.where(
            sequelize.fn("YEAR", sequelize.col("thoiGianBatDau")),
            year
          ),
    });

    res.json(result)
  
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
  }
});


router.post('/tao', async function (req, res, next) {
    try {
        const thoiGianBatDau = req.body.thoiGianBatDau;
        const diaDiem = req.body.diaDiem;
        const noiDung = req.body.noiDung;
    
        // Create a new instance of GiayTamTru
        const thongbao = await HopToDanPho.create({
            thoiGianBatDau,
            diaDiem,
            noiDung
        });
    
        // Data added successfully
        res.json({ message: 'Done' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Internal Error" });
    }
    });

module.exports = router;
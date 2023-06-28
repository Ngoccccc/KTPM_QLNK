var express = require("express");
var NhanKhau = require("../models/NhanKhau");
var NhanKhau = require("../models/NhanKhau");
var GiayTamTru = require("../models/GiayTamTru");

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
        console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
    }
});

router.post("/doihokhau", async function (req, res, next) {
    try {
        await Thuoc.update(
            { soHoKhau: req.body.soHoKhau },
            {
              where: {
                soCCCD: req.body.soCCCD,
              },
            }
          );
        res.json({"status": "ok"})
    } catch (error) {
        console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
    }
});

router.post('/tamtru', async function (req, res, next) {
try {
    // Extract data from the request body
    const {
    diaChiThuongChu,
    hoKhauTamTru,
    soCCCD,
    ngayBatDau,
    ngayKetThuc,
    ngayDangKi,
    lyDoTamTru
    } = req.body;

    // Create a new instance of GiayTamTru
    const giayTamTru = await GiayTamTru.create({
    diaChiThuongChu,
    hoKhauTamTru,
    soCCCD,
    ngayBatDau,
    ngayKetThuc,
    ngayDangKi,
    lyDoTamTru
    });

    // Data added successfully
    res.json({ message: 'Data added to giaytamtru table' });
} catch (error) {
    console.error('Error adding data to giaytamtru table:', error);
    res.status(500).json({ error: "Internal Error" });
}
});



router.post('/tamvang', async function (req, res, next) {
    try {
        // Extract data from the request body
    const {
        diaChiThuongChu,
        hoKhauTamTru,
        soCCCD,
        ngayBatDau,
        ngayKetThuc,
        ngayDangKi,
        lyDoTamTru
        } = req.body;
    
        // Create a new instance of GiayTamTru
        const giayTamTru = await GiayTamTru.create({
        diaChiThuongChu,
        hoKhauTamTru,
        soCCCD,
        ngayBatDau,
        ngayKetThuc,
        ngayDangKi,
        lyDoTamTru
        });
    
    } catch (error) {
        console.error('Error adding data to giaytamvang table:', error);
        res.status(500).json({ error: "Internal Error" });
    }
    });
    

module.exports = router;
var express = require("express");
var NhanKhau = require("../models/NhanKhau");
var NhanKhau = require("../models/NhanKhau");
var GiayTamTru = require("../models/GiayTamTru");
var GiayTamVang = require("../models/GiayTamVang");

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
    // const {
    // diaChiThuongChu,
    // hoKhauTamTru,
    // soCCCD,
    // ngayBatDau,
    // ngayKetThuc,
    // ngayDangKi,
    // lyDoTamTru
    // } = req.body;

    const diaChiThuongChu = req.body.diaChiThuongChu;
    const hoKhauTamTru = req.body.hoKhauTamTru;
    const soCCCD = req.body.soCCCD;
    const ngayBatDau = req.body.ngayBatDau;
    const ngayKetThuc = req.body.ngayKetThuc;
    const ngayDangKi = req.body.ngayDangKi;
    const lyDoTamTru = req.body.lyDoTamTru;

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
      const diaChiThuongChu = req.body.diaChiThuongChu;
      const hoKhauTamVang = req.body.hoKhauTamVang;
      const soCCCD = req.body.soCCCD;
      const ngayBatDau = req.body.ngayBatDau;
      const ngayKetThuc = req.body.ngayKetThuc;
      const ngayDangKi = req.body.ngayDangKi;
      const lyDoTamVang = req.body.lyDoTamVang;
  
      // Create a new instance of GiayTamVang
      const giayTamVang = await GiayTamVang.create({
      diaChiThuongChu,
      hoKhauTamVang,
      soCCCD,
      ngayBatDau,
      ngayKetThuc,
      ngayDangKi,
      lyDoTamVang
      });
  
  } catch (error) {
      console.error('Error adding data to giaytamvang table:', error);
      res.status(500).json({ error: "Internal Error" });
  }
  });
    


router.get('/thongke/gioitinh', async function (req, res, next) {
  try {
    var result_nam = await NhanKhau.findAll({
      where: { gioiTinh: 'Nam' },
    });
    var result_nu = await NhanKhau.findAll({
      where: { gioiTinh: 'Nữ' },
    });
    res.json({"Nam": result_nam, "Nữ": result_nu})
  
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
  }
  });
    
  
router.get('/thongke/tamtrutamvang', async function (req, res, next) {
  try {
    var result_tamtru = await GiayTamTru.findAll({
    });
    var result_tamvang = await GiayTamVang.findAll({
    });
    res.json({"TamTru": result_tamtru, "TamVang": result_tamvang})
  
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
  }
});
module.exports = router;
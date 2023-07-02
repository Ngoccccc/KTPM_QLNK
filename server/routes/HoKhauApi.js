var express = require("express");
var SoHoKhau = require("../models/SoHoKhau");
var NhanKhau = require("../models/NhanKhau");
var ChuHo = require("../models/ChuHo");
var Thuoc = require("../models/Thuoc");
// var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");
const { QueryTypes, where, Op } = require("sequelize");
// const { QueryTypes, where, json } = require("sequelize");

var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    var arr = await SoHoKhau.findAll();
    var result = [];

    for (const item of arr) {
      var result_chuHo = await ChuHo.findOne({
        where: { soHoKhau: item.soHoKhau },
      });

      if (result_chuHo) {
        var result_thongTinChuHo = await NhanKhau.findOne({
          where: { soCCCD: result_chuHo.soCCCD },
        });

        item.dataValues.chuho = result_thongTinChuHo;
      }

      result.push(item);
    }

    res.json(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Error" });
  }
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



router.post('/suathongtin', async function (req, res, next) {
  try {
    
    const fieldsToUpdate = Object.keys(SoHoKhau.rawAttributes).filter(
      (field) => field !== "soHoKhau"
    );

    let dataToUpdate = {};
    
    for (const field of fieldsToUpdate) {
      if (req.body[field] != null) {
        dataToUpdate[field] = req.body[field];
      }
    }

    await SoHoKhau.update(dataToUpdate,
        {
          where: {
            soHoKhau: req.body.soHoKhau,
          },
        }
      );
    
    result = await SoHoKhau.findOne({
      where: { soHoKhau: req.body.soHoKhau },
    });
      // Data added successfully
      res.json(result);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Internal Error" });
  }
  });
  

router.post("/themnguoi", async function (req, res, next) {
  try {
    await SoHoKhau.findOne({ where: { soHoKhau: req.body.soHoKhau } }).then(
      async (result) => {
        if (result) {
          await ChuHo.findOne({ where: { soHoKhau: req.body.soHoKhau } }).then(
            async (result) => {
              if (result) {
                if (
                  req.body.nhanKhau.quanHeVoiChuHo != "Chủ hộ" ||
                  req.body.nhanKhau.quanHeVoiChuHo != "Chu ho"
                ) {
                  await NhanKhau.create(req.body.nhanKhau);
                  await Thuoc.create({
                    soHoKhau: req.body.soHoKhau,
                    soCCCD: req.body.nhanKhau.soCCCD,
                  });
                  await res.send({ status: true });
                } else {
                  res.json({ status: false });
                }
              } else {
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
            }
          );
        } else {
          res.json({ status: false });
        }
      }
    );
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
    // update quanHeVoiChuHo thanh "Chủ hộ", tạo hộ khẩu mới, thêm chủ hộ mới
    // Lấy ra danh sách người muốn tách
    // Cập nhật lại bảng thuộc
    // Tạo hộ khẩu mới, thêm chủ hộ, thay đổi bảng thuộc
    let a = await SoHoKhau.create(req.body.hoKhauMoi);
    await ChuHo.create(
      {
        soHoKhau: a.dataValues.soHoKhau,
        soCCCD: req.body.CCCDChuHoMoi,
      },
      {
        where: {
          soCCCD: {
            [Op.ne]: req.body.CCCDChuHoMoi,
          },
        },
      }
    );
    await Thuoc.update(
      { soHoKhau: a.dataValues.soHoKhau },
      {
        where: {
          soCCCD: [...req.body.danhSachCCCDTachKhau, req.body.CCCDChuHoMoi],
        },
      }
    );
    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({
      status: false,
    });
  }
});
module.exports = router;

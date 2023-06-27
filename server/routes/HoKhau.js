var express = require("express");
var SoHoKhau = require("../models/SoHoKhau");
var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");

var router = express.Router();

router.get("/hokhau", function (req, res, next) {
  try {
    console.log(SoHoKhau.findAll({ limit: 10 }));
  } catch (error) {}
});

module.exports = router;

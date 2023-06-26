var express = require("express");
var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");

var router = express.Router();

router.post("/register", function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    try {
      await User.create({
        username: req.body.username,
        soCCCD: req.body.soCCCD,
        password: hash,
        role: req.body.role,
      });
      res.send({
        status: "success",
      });
    } catch (error) {
      res.send({
        status: "false",
      });
    }
  });
});

module.exports = router;

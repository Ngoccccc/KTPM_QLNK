var express = require("express");
var User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var conn = require("../models/connectDB");

var router = express.Router();

router.post("/login", async function (req, res, next) {
  try {
    const user_info = await User.findOne({
      where: { username: req.body.username },
    });
    bcrypt.compare(
      req.body.password,
      user_info.dataValues.password,
      function (err, result) {
        if (result) {
          res.json({ status: result });
        } else {
          res.status(400).json({ status: "Sai ten dang nhap hoac mat khau" });
        }
      }
    );
  } catch (error) {
    res.status(400).json({ status: "Sai ten dang nhap hoac mat khau", "error": error });
  }
});

module.exports = router;

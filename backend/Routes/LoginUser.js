const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "iamsyedshaeduzzamannoorandiamgraduatedfromanhuiuniversityoftechnology"

router.post("/login-user", async (req, res) => {
  let userEmail = req.body.email;

  try {
    let userData = await User.findOne({ email: userEmail });
    if (!userData) {
      return res
        .status(400)
        .json({ error: "Incorrect email or password! Try again." });
    } else {
      const passwordCompare = await bcrypt.compare(req.body.password, userData.password)
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Incorrect email or password! Try again." });
      } else {

        const data = {
          user: {
            id: userData.id
          }
        }

        const authToken = jwt.sign(data, jwtSecret)
        return res.status(200).json({ success: "User login successfully.", authToken: authToken });
      }
    }
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;

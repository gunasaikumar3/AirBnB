const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const User = require("../models/user.js");

router.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  const newUser = new User({ email });
  console.log(await User.register(newUser));
});

module.exports = router;

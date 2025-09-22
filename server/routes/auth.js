const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const authController = require("../controllers/auth.js");

router.post("/register", wrapAsync(authController.register));

router.post("/login", wrapAsync(authController.login));

router.post("/refresh", wrapAsync(authController.refresh));

router.post("/logout", wrapAsync(authController.logout));

module.exports = router;

const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.js");

const wrapAsync = require("../utils/wrapAsync.js");

router.route("/:userId").get(wrapAsync(userController.getUserData));

module.exports = router;

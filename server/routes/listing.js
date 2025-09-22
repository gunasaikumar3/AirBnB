const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { listingSchema } = require("../schema.js");
const listingController = require("../controllers/listing.js");

const validateListing = (req, res, next) => {
  const error = listingSchema.validate(req.body);

  if (error) {
    // let errorMessage = error.details.map((el) => el.message).join("");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// Index Route
router.get("/", listingController.index);

//Show Route
router.get("/:id", wrapAsync(listingController.show));

//Create Route
router.post("/", validateListing, wrapAsync(listingController.create));

//Update Route
router.put("/:id", validateListing, wrapAsync(listingController.update));

//Delete Route
router.delete("/:id", wrapAsync(listingController.delete));

module.exports = router;

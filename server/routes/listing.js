const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { listingSchema } = require("../schema.js");
const listingController = require("../controllers/listing.js");

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    let errorMessage = error.details.map((el) => el.message).join("");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

router
  .route("/")
  // Index Route
  .get(listingController.index)

  //Create Route
  .post(validateListing, wrapAsync(listingController.create));

router
  .route("/:id")
  //Show Route
  .get(wrapAsync(listingController.show))

  //Update Route
  .put(validateListing, wrapAsync(listingController.update))

  //Delete Route
  .delete(wrapAsync(listingController.delete));

module.exports = router;

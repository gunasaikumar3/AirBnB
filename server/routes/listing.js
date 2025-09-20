const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { listingSchema } = require("../schema.js");

const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
  const error = listingSchema.validate(req.body);

  if (error) {
    let errorMessage = error.details.map((el) => el.message).join("");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

// Index Route
router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.send(allListings);
});

//Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.send(listing);
  })
);

//Create Route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    let newListing = new Listing(req.body.listing);
    await newListing.save();

    res.status(201).json({
      message: "Listing created successfully",
    });
  })
);

//Update Route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.status(201).json({
      message: "Listing created successfully",
    });
  })
);

//Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    await Listing.findByIdAndDelete(id);
    res.status(201).json({
      message: "Listing deleted successfully",
    });
  })
);

module.exports = router;

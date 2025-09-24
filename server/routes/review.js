const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");

const reviewController = require("../controllers/review.js");

router.route("/").get(wrapAsync(reviewController.listingReviews));

router.route("/:userId").post(wrapAsync(reviewController.createReview));

module.exports = router;

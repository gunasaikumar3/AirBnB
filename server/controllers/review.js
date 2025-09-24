const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.listingReviews = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      select: "rating comment createdAt",
      populate: {
        path: "owner",
        select: "email registerDate",
      },
    })
    .select("reviews")
    .exec();

  res.json({ listing });
};
module.exports.createReview = async (req, res) => {
  const { id, userId } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    // req.flash("error", "Listing not found.");
    // return res.redirect("/");
  }

  const newReview = new Review(req.body.review);
  newReview.owner = userId;

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  res.status(201).json({
    message: "Review created successfully",
  });
};

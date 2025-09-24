const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.send(allListings);
};

module.exports.show = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.send(listing);
};

module.exports.create = async (req, res) => {
  let newListing = new Listing(req.body.listing);
  await newListing.save();

  res.status(201).json({
    message: "Listing created successfully",
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.status(201).json({
    message: "Listing updated successfully",
  });
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);
  res.status(201).json({
    message: "Listing deleted successfully",
  });
};

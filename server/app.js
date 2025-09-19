const express = require("express");
const app = express();

const cors = require("cors");
const methodOverride = require("method-override");

const mongoose = require("mongoose");
const Listing = require("./models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.send(allListings);
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.send(listing);
});

//Create Route
app.post("/listings", async (req, res) => {
  console.log(req.body);
  let newListing = new Listing(req.body.listing);
  await newListing.save();

  res.status(201).json({
    message: "Listing created successfully",
  });
});

//Update Route
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.status(201).json({
    message: "Listing created successfully",
  });
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;

  await Listing.findByIdAndDelete(id);
  res.status(201).json({
    message: "Listing deleted successfully",
  });
});

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

app.listen(8080, () => {
  console.log("server started at 8080");
});

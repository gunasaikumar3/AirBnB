const express = require("express");
const app = express();

const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const mongoose = require("mongoose");

const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const authRouter = require("./routes/auth.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB";

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

const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  credentials: true, // allow cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi i am root");
});

app.use("/api/listings", listingRouter);
app.use("/api/auth", authRouter);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server started at 8080");
});

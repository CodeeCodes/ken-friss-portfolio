const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

/// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// Const routers
// Template:
const imagesRouter = require("./routes/api/imagesApi");
const reelsRouter = require("./routes/api/reelsApi");

/// Link Route Files
// Template:
app.use("/images", imagesRouter);
app.use("/reels", reelsRouter);
app.use("/static", express.static((__dirname, "photos")));
console.log(__dirname);
//App listen on PORT variable
app.listen(PORT, () => {
  console.log(`Welcome :) Now listening on port ${PORT}`);
});

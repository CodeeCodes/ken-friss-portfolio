const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

/// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//App listen on PORT variable
app.listen(PORT, () => {
  console.log(`Welcome :) Now listening on port ${PORT}`);
});

const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());

//initializing app to use express
const app = express();

// / Initialize Files, File Data
const imagesData = `${__dirname}` + "/model/images.json";
let images = require(imagesData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(images);
});
module.exports = router;

const express = require("express");
const router = express.Router();
const cors = require("cors");
const helper = require("../../helper/helper");
router.use(cors());

//initializing app to use express
const app = express();

// / Initialize Files, File Data
const reelsData = `${__dirname}` + "/model/reels.json";
let reels = require(reelsData);

app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  res.json(reels);
});
module.exports = router;

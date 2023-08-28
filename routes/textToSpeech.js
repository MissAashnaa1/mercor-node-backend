const express = require("express");
const router = express.Router();

const { textToSpeechFunc } = require("../controller/speechController");

router.route("/").post(textToSpeechFunc);

module.exports = router;

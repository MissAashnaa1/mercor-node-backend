const express = require("express");
const router = express.Router();

const QuestionAnswer = require("../models/questionAnswer");

router.route("/").get(async (req, res) => {
  res.send("Hello World");
});

module.exports = router;

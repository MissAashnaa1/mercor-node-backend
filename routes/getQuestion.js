const express = require("express");
const quesList = require("../pdfFiles/questions");
const router = express.Router();

router.route("/").get(async (req, res) => {
  // let ques = quesList[Math.floor(Math.random() * quesList.length)];
  // res.json({ ...ques });

  res.json({ ques: quesList });
});

module.exports = router;

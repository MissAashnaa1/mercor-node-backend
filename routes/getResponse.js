const express = require("express");
const router = express.Router();
const axios = require("axios");
const generateQuestions = require("../methods/test");

router.route("/").get(async (req, res) => {
  generateQuestions().then((question) => {
    // console.log("Generated Question:", question);
    res.json({ question: question });
  });
});

module.exports = router;

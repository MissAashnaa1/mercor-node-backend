const express = require("express");
const router = express.Router();

const {
  hanldeTestSubmit,
  getSubmissions,
} = require("../controller/testSubmissionController");

router.get("/:userID", getSubmissions);

router.post("/:userID", hanldeTestSubmit);

module.exports = router;

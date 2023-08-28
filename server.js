const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");

dotenv.config();
connectDB();

// const pdfExtractorFunction = require("./methods/pdfExtractor");
// pdfExtractorFunction();

// const generateQuestions = require("./methods/test");
// const quesList = require("./pdfFiles/questions");
// generateQuestions().then((question) => {
//   console.log("Generated Question:", question);
// });

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/get-question", require("./routes/getQuestion"));

app.use("/api/get-response", require("./routes/getResponse"));
app.use("/api/text-to-speech", require("./routes/textToSpeech"));
app.use("/api/test-submission", require("./routes/testSubmissionRoute"));

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(port, (err) => {
  if (!err) console.log(`Server is running on port ${port}.`);
  else console.log(err);
});

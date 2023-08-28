const mongoose = require("mongoose");

const questionAnswerSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quesAnswers: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
  },
  { timestamp: true }
);

const QuestionAnswer = mongoose.model("QuestionAnswers", questionAnswerSchema);

module.exports = QuestionAnswer;

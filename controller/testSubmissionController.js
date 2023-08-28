const QuestionAnswer = require("../models/questionAnswer");

const getSubmissions = async (req, res) => {
  try {
    const submissions = await QuestionAnswer.findOne({
      userID: req.params.userID,
    });
    // console.log(submissions, "submissions");
    res.json({ success: true, msg: "Submissions found!", submissions });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Error: " + error });
  }
};

const hanldeTestSubmit = async (req, res) => {
  try {
    const userID = req.params.userID;
    const quesAnswers = req.body.quesAns;

    // console.log(userID, quesAnswers, "qas");

    let submission = await QuestionAnswer.findOne({ userID: userID });
    if (submission) {
      submission.quesAnswers = [...submission.quesAnswers, ...quesAnswers];
      submission
        .save()
        .then(() =>
          res.json({
            success: true,
            msg: "Submissions updated!",
          })
        )
        .catch((err) => res.status(400).json("Error: " + err));
      return;
    } else {
      const newQuestionAnswer = new QuestionAnswer({
        userID,
        quesAnswers,
      });

      newQuestionAnswer
        .save()
        .then(() =>
          res.json({
            success: true,
            msg: "Submissions added!",
            newQuestionAnswer,
          })
        )
        .catch((err) => res.status(400).json("Error: " + err));
    }
  } catch (error) {
    res.status(400).json({ success: false, msg: "Error: " + error });
  }
};

module.exports = { getSubmissions, hanldeTestSubmit };

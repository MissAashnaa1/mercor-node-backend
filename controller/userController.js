const QuestionAnswer = require("../models/questionAnswer");
const User = require("../models/user");

const createUserr = async (req, res) => {
  const username = req.body.username;

  let user = await User.findOne({ username: username });
  // console.log(user, "user");
  if (user) {
    res.json({ success: false, msg: "User already exists!", user: user });
  } else {
    const newUser = new User({ username });

    newUser
      .save()
      .then(() =>
        res.json({ success: true, msg: "User added!", user: newUser })
      )
      .catch((err) => res.status(400).json("Error: " + err));
  }
};

const getUserData = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const questionAnswers = await QuestionAnswer.findOne({ user: user._id });

    res.json({
      success: true,
      msg: "User found!",
      user: user,
      questionAnswers: questionAnswers,
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Error: " + error });
  }
};

module.exports = { createUserr, getUserData };

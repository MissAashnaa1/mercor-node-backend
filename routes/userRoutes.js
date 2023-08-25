const exrpress = require("express");
const { createUserr, getUserData } = require("../controller/userController");
const router = exrpress.Router();

router.route("/get").get(getUserData);

router.route("/create").post(createUserr);

module.exports = router;

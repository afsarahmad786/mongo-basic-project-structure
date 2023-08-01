const express = require("express");
const UserController = require("../controller/user");

const router = express.Router();

router.get("/", UserController.test);
router.get("/test", UserController.practice);
module.exports = router;

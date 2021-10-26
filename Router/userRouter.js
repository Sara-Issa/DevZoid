const express = require("express");
const userController = require("./../Controller/userController");
const router = express.Router();
const verifyToken = require("../middleware/auth");

router.route("/").post(userController.saveUser);
router.route("/login").post(userController.findUser);
router.route("/").get(userController.find);


// router.route("/:id").delete(userController.deleteUser)


module.exports = router;

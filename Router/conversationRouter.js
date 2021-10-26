const express = require("express");
const router = express.Router();
const conversationController = require("../Controller/conversationController");

//new conv

router.route("/").post(conversationController.newConversation)

//get conv of a user

router.route("/:userId").get(conversationController.getConversation)

// get conv includes two userId

router.route("/find/:firstUserId/:secondUserId").get(conversationController.getGroupConversation)

module.exports = router;
const express = require("express");
const router = express.Router();
const messageController = require("./../Controller/messageController");

// add
router.route("/").post(messageController.newMessage)

// get
router.route("/:conversationId").get(messageController.oldMessage)

module.exports = router;

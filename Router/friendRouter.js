const express = require("express");
const friendController = require("./../Controller/friendController");
const router = express.Router();


router.route("/friends/:userId").get(friendController.startConversation)


router.route("/friends/:userId").post(friendController.saveConversation)




module.exports = router;

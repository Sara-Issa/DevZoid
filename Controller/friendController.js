const Friend = require("../Model/friendModel");


exports.startConversation = async (req, res) => {

    const Id = (req.params.userId)
    try {
      const friend = await Friend.findByOne({
        friendId: req.params.userId
      });  
      res.status(200).json(friend)
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  exports.saveConversation = async (req, res) => {
      const Id = (req.params.userId)
    try {
      const friendId = await Friend.create({
          friendId: req.params.userId
      });  
      res.status(200).json(friendId)
    } catch (err) {
      res.status(500).json(err);
    }
  };
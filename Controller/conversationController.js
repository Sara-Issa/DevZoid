const Conversation = require("../Model/conversationModel");

exports.newConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    //1 findOne from the db where senderId and recieverId exist,
    //2 if it doesn't exist i wa
    const exsists = await Conversation.findOne({members:  
    [ req.body.senderId, req.body.receiverId]}) 
    console.log(exsists);   
    if (exsists === null) {
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({
          members: { $in: [req.params.userId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
};

exports.getGroupConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
          members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
      } catch (err) {
        res.status(500).json(err);
      }
};

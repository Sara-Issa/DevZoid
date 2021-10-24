const Client = require("../Model/clientModel");

exports.allClients = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json({
      message: "all clients",
      clients,
    });
  } catch (e) {
    res.status(400).send({ message: res.message });
  }
};

exports.saveClient = async (req, res) => {
  try {
    req.body.image = req.file.filename;
    await Client.create(req.body);
    res.status(200).send({ message: "created" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.editClient = async (req, res) => {
  try {
    if (req.file !== undefined) {
      req.body.image = req.file.filename;
    }

    await Client.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "profile updated",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteClient = (req, res) => {
  res.status(200).json({
    message: "client Deleted",
  });
};

exports.findClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json({
      message: "profile found",
      client,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

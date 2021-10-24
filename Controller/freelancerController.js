const Freelancer = require("../Model/freelancerModel");

exports.allFreelancer = async (req, res) => {
  try {
    const freelancers = await Freelancer.find({});
    res.status(200).json({
      message: "all freelancers",
      freelancers,
    });
  } catch (e) {
    res.status(400).send({ message: res.message });
  }
};

exports.saveFreelancer = async (req, res) => {
  try {
    req.body.image = req.file.filename;
    await Freelancer.create(req.body);
    res.status(200).send({ message: "created" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.editFreelancer = async (req, res) => {
  try {
    if (req.file !== undefined) {
      req.body.image = req.file.filename;
    }

    await Freelancer.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "profile updated",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteFreelancer = (req, res) => {
  res.status(200).json({
    message: "Freelancer Deleted",
  });
};

exports.findFreelancer = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    res.status(200).json({
      message: "profile found",
      freelancer,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

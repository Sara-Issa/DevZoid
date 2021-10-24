const Job = require("./../Model/jobModel");

exports.allJob = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({
      message: "all job",
      jobs,
    });
  } catch (e) {
    res.status(400).send({ message: res.message });
  }
};

exports.saveJob = async (req, res) => {
  try {
    const job = await Job.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(200).send({ message: "created", job });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.editJob = (req, res) => {
  res.status(200).json({
    message: "job Edited",
  });
};

exports.deleteJob = (req, res) => {
  res.status(200).json({
    message: "job Deleted",
  });
};

exports.findJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json({
      message: "Found Job",
      job,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

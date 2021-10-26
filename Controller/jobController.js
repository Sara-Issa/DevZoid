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
      title: req.body.title,
      userId: req.params.user._id,
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

// exports.Applied = async (req, res) => {
//   try {
//     await Job.create(req.body);
//     res.status(201).json({ message: "job Apply success" });
//   } catch (e) {
//     res.status(404).json({ message: e.message });
//   }
// };

// exports.getApplied = async (req, res) => {
//   res.status(200).json({
//     message: "job Deleted",
//   });
// };


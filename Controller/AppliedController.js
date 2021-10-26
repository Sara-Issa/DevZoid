const Job = require ("./../Model/AppliedModel")

exports.Applied = async (req, res) => {
    try {
      await Job.create({
        applierId: "",
          jobId: (req.params.id),
          posterId:"", 
          name: (req.data),
          description:"",
          price:"",
      });
      res.status(201).json({ message: "job Apply success" });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  };
  
  exports.getApplied = async (req, res) => {
    res.status(200).json({
      message: "job Deleted",
    });
  };
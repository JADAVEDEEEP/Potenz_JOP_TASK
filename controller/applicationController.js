const Application = require("../model/application");
const Job = require("../model/job");

const applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const application = await Application.create({
      user: req.UserId,
      job: req.params.jobId,
    });

    res.status(201).json({
      message: "Job applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: "Application failed",
      error: error.message,
    });
  }
};

const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.UserId,
    }).populate("job", "title company location");

    res.status(200).json({
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};

module.exports = {
  applyJob,
  getMyApplications,
};
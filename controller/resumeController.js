const User = require("../model/user");

const uploadResume = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "Resume file is required",
      });
    }

    const user = await User.findById(req.UserId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.resume = file.path;

    await user.save();

    res.status(200).json({
      message: "Resume uploaded successfully",
      resume: user.resume,
    });
  } catch (error) {
    res.status(500).json({
      message: "Resume upload failed",
      error: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};
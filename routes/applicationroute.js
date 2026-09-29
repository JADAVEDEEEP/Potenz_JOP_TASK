const express = require("express");
const protect = require("../middleware/auth");
const {
  applyJob,
  getMyApplications,
} = require("../controller/applicationController");

const applicationrouter = express.Router();

applicationrouter.post("/:jobId", protect, applyJob);

applicationrouter.get("/me", protect, getMyApplications);

module.exports = applicationrouter;
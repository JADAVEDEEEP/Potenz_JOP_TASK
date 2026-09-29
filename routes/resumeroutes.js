const express = require("express");
const protect = require("../middleware/auth");
const upload = require("../uplaods/uploadMiddleware");

const { uploadResume } = require("../controller/resumeController");

const resumerouter = express.Router();

resumerouter.post(
  "/",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = resumerouter;
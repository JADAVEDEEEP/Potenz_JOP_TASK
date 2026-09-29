const express = require("express");

const {
  getAllJobs,
  getSingleJob,
} = require("../controller/jobController");

const jobrouter = express.Router();

jobrouter.get("/", getAllJobs);
jobrouter.get("/:id", getSingleJob);

module.exports = jobrouter;
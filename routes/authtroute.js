const express = require("express");

const { registeruser, loginuser} = require("../controller/authController");

const userrouter = express.Router();

userrouter.post("/register", registeruser);
userrouter.post("/login", loginuser);

module.exports = userrouter;
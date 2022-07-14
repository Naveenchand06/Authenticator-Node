const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

// Register user Route
router.post("/", registerUser);

// Login user Route
router.post("/login", loginUser);

// get user Route
router.post("/me", getMe);

module.exports = router;

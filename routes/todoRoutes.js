const express = require("express");
const router = express.Router();
const { getTodos, createTodo } = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");

// Protected Route
router.get("/", protect, getTodos);

// Protected Route
router.post("/", protect, createTodo);

// Update Todo

module.exports = router;

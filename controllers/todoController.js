const asynchandler = require("express-async-handler");
const Todo = require("../models/todoModel");

const getTodos = asynchandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.status(200).json(todos);
});

const createTodo = asynchandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: "Please enter all fields" });
  }
  const todo = await Todo.create({
    user: req.user.id,
    title: req.body.title,
    completed: req.body.completed,
  });
  res.status(200).json(todo);
});

module.exports = {
  getTodos,
  createTodo,
};

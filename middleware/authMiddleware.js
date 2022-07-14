const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Getting token from header
      token = req.headers.authorization.split(" ")[1];
      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decoded", decoded);
      req.user = await User.findById(decoded.id);
      console.log("Middleware User", req.user);
      next();
    } catch (e) {
      console.log(e);
      res.status(401).json({ error: "Not Authorized User" });
    }
  }
  // if token is not present
  if (!token) {
    res.status(401).json({ error: "Not Authorized" });
  }
});

module.exports = { protect };

const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/jwt_tutorial"
    );
    console.log(
      `Mongoose connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

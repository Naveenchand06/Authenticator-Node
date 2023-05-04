const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://host.docker.internal:27017/authenticator"
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

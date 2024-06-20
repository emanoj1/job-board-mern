// handle the MongoDB connection

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

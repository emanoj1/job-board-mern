const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

// Connect Database
const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const jobsRouter = require('./routes/jobs');
app.use('/api/jobs', jobsRouter);

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


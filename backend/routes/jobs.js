// Handle Job Submissions, Approvals, and Fetching Jobs

const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Endpoint to get approved jobs
router.get('/approved', async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'approved' });
    res.json(jobs);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;



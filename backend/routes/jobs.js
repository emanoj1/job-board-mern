// Handle Job Submissions, Approvals, and Fetching Jobs

const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// POST endpoint to submit job
router.post('/jobs', async (req, res) => {
  try {
    const job = new Job({
      jobName: req.body.jobName,
      companyName: req.body.companyName,
      jobType: req.body.jobType,
      jobDetails: req.body.jobDetails,
      applyLink: req.body.applyLink,
      location: req.body.location,
      salary: req.body.salary,
      commencementDate: req.body.commencementDate,
      approved: false // Initially not approved
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting job' });
  }
});

// Get all submitted jobs (for admin approval)
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find({ approved: false });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

// Approve a job
router.put('/jobs/:id/approve', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    job.approved = true;
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Error approving job' });
  }
});

// Get all approved jobs
router.get('/jobs/approved', async (req, res) => {
  try {
    const jobs = await Job.find({ approved: true });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching approved jobs' });
  }
});

module.exports = router;


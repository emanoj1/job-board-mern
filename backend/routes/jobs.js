const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Get all approved jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'approved' });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit a new job
router.post('/', async (req, res) => {
  const job = new Job({
    jobName: req.body.jobName,
    companyName: req.body.companyName,
    jobType: req.body.jobType,
    jobDetails: req.body.jobDetails,
    applyLink: req.body.applyLink,
    location: req.body.location,
    salary: req.body.salary,
    dateOfCommencement: req.body.dateOfCommencement
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Approve a job
router.patch('/:id/approve', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job == null) {
      return res.status(404).json({ message: 'Cannot find job' });
    }
    job.status = 'approved';
    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

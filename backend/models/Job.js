const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  companyName: { type: String, required: true },
  jobType: { type: String, required: true },
  jobDetails: { type: String, required: true },
  applyLink: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  dateOfCommencement: { type: Date, required: true },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Job', JobSchema);

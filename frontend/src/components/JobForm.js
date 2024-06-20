import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobName: '',
    companyName: '',
    jobType: '',
    jobDetails: '',
    applyLink: '',
    location: '',
    salary: '',
    dateOfCommencement: ''
  });

  const { jobName, companyName, jobType, jobDetails, applyLink, location, salary, dateOfCommencement } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', formData);
      setFormData({
        jobName: '',
        companyName: '',
        jobType: '',
        jobDetails: '',
        applyLink: '',
        location: '',
        salary: '',
        dateOfCommencement: ''
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="jobName" value={jobName} onChange={onChange} placeholder="Job Name" required />
      <input type="text" name="companyName" value={companyName} onChange={onChange} placeholder="Company Name" required />
      <input type="text" name="jobType" value={jobType} onChange={onChange} placeholder="Job Type" required />
      <textarea name="jobDetails" value={jobDetails} onChange={onChange} placeholder="Job Details" required />
      <input type="text" name="applyLink" value={applyLink} onChange={onChange} placeholder="Apply Link" required />
      <input type="text" name="location" value={location} onChange={onChange} placeholder="Location" required />
      <input type="text" name="salary" value={salary} onChange={onChange} placeholder="Salary" required />
      <input type="date" name="dateOfCommencement" value={dateOfCommencement} onChange={onChange} required />
      <button type="submit">Submit Job</button>
    </form>
  );
};

export default JobForm;

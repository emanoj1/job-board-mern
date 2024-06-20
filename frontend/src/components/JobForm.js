// Job Submission Form Component
// This component handles user input and form submission to the backend.

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
    commencementDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, formData);
      console.log('Job submitted', response.data);
      // Optionally reset the form
      setFormData({
        jobName: '',
        companyName: '',
        jobType: '',
        jobDetails: '',
        applyLink: '',
        location: '',
        salary: '',
        commencementDate: ''
      });
    } catch (error) {
      console.error('There was an error submitting the job', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="jobName" value={formData.jobName} onChange={handleChange} placeholder="Job Name" required />
      <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
      <input name="jobType" value={formData.jobType} onChange={handleChange} placeholder="Job Type" required />
      <textarea name="jobDetails" value={formData.jobDetails} onChange={handleChange} placeholder="Job Details" required />
      <input name="applyLink" value={formData.applyLink} onChange={handleChange} placeholder="Apply Link" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <input name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" required />
      <input name="commencementDate" value={formData.commencementDate} onChange={handleChange} placeholder="Commencement Date" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;

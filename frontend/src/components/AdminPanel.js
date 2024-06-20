// Admin Interface to Approve Jobs

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  const approveJob = async (id) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}/approve`);
      setJobs(jobs.map(job => (job._id === id ? response.data : job)));
    } catch (error) {
      console.error('There was an error approving the job', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.jobName}</h2>
            <p>{job.companyName}</p>
            <button onClick={() => approveJob(job._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

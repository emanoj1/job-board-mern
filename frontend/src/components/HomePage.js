// Display Approved Jobs on Homepage

import React, { useState, useEffect } from 'react';
import { fetchApprovedJobs } from '../api';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchApprovedJobs();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    getJobs();
  }, []);

  return (
    <div>
      <h1>Approved Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;


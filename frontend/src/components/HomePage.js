// Display Approved Jobs on Homepage

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchApprovedJobs = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs/approved`);
      setJobs(response.data);
    };

    fetchApprovedJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.jobName}</h2>
            <p>{job.companyName}</p>
            <p>{job.jobType}</p>
            <p>{job.jobDetails}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.commencementDate}</p>
            <a href={job.applyLink}>Apply</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

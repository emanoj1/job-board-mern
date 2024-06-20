import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <Job key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;

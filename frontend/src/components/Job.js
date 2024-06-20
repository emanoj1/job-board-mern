import React from 'react';

const Job = ({ job }) => (
  <div>
    <h2>{job.jobName}</h2>
    <p>{job.companyName}</p>
    <p>{job.jobType}</p>
    <p>{job.jobDetails}</p>
    <p>{job.location}</p>
    <p>{job.salary}</p>
    <p>{new Date(job.dateOfCommencement).toLocaleDateString()}</p>
    <a href={job.applyLink}>Apply Here</a>
  </div>
);

export default Job;

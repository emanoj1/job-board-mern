// an API Utility File
// a function to fetch approved jobs from the backend, and implemented in the frontend

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchApprovedJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/approved`);
    return response.data;
  } catch (error) {
    console.error('Error fetching approved jobs:', error);
    throw error;
  }
};

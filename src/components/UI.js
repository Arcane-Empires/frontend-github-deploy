import React from 'react';
import apiCall  from '../services/apiCall'

const UI = () => {
  const fetchData = async () => {
    try {
      const data = await apiCall('https://node-server-379840034411.us-central1.run.app/api/user');
      console.log('Data:', data);
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div>
      <h1>Game UI</h1>
      {/* Add UI elements here */}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default UI;
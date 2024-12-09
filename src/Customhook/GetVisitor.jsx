import React, { useEffect, useState } from 'react'
import { host } from '../utils/constant';
import axios from 'axios';

const GetVisitor = () => {
    
  const [stats, setStats] = useState({ views: 0, uniqueVisitors: 0 });
  const page = "hireme"; // Define the page identifier

  useEffect(() => {
    // Send a request to track the visitor
    axios.post(`${host}/visitors/track`, { page })
      .then(() => {
        // Fetch updated stats
        axios.get(`${host}/visitors/stats/${page}`)
          .then((res) => setStats(res.data))
          .catch((err) => console.error('Error fetching stats:', err));
      })
      .catch((err) => console.error('Error tracking visitor:', err));
  }, [page]);
  return {stats}
}

export default GetVisitor
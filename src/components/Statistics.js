import React, { useState, useEffect } from 'react';

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    // aqui se hace la llamada al backend para obtener las estadisticas
    const fetchStatistics = async () => {
      const response = await fetch('https://my-api.com/statistics');
      const data = await response.json();
      setStatistics(data);
    }
    fetchStatistics();
  }, []);

  return (
    <div>
      <h1>Super Bowl Statistics</h1>
      <ul>
        {statistics.map(stat => (
          <li key={stat.id}>{stat.name}: {stat.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Statistics;
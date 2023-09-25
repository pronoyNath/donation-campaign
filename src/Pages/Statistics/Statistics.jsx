import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const Statistics = ({ chartData }) => {
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    // Increment the key to trigger chart re-rendering
    setChartKey((prevKey) => prevKey + 1);
  }, [chartData]);

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie key={chartKey} data={chartData} />
    </div>
  );
};

export default Statistics;

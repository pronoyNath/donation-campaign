import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function Statistics() {
  const data = {
    labels: ['series A', 'series B', 'series C'],
    datasets: [
      {
        data: [10, 15, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // You can customize the colors here
      },
    ],
  };

  const options = {
    // You can customize chart options here
    responsive: true,
  };

  return (
    <div style={{ width: '1000px', height: '400px', margin: '0px auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

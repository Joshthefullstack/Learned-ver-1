// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;

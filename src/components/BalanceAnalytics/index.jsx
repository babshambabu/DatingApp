import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceAnalytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Expense',
        data: [120, 150, 100, 200, 170, 140, 180, 160, 190, 210, 220, 240],
        borderColor: '#FF6347', // Line color for expense (matches the orange-red line in the image)
        backgroundColor: 'rgba(255, 99, 71, 0.2)', // Lighter fill under the curve
        tension: 0.4, // Smoother curve
        fill: true,  // Fill area under the line
        pointRadius: 0, // No points on the graph
      },
      {
        label: 'Income',
        data: [130, 160, 120, 230, 180, 160, 200, 180, 210, 240, 250, 270],
        borderColor: '#FFA500', // Line color for income (matches the yellow-orange line in the image)
        backgroundColor: 'rgba(255, 165, 0, 0.2)', // Lighter fill under the curve
        tension: 0.4, // Smoother curve
        fill: true,  // Fill area under the line
        pointRadius: 0, // No points on the graph
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,  // Removes the vertical grid lines
        },
      },
      y: {
        grid: {
          display: false,  // Removes the horizontal grid lines
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,  // Limits number of ticks for a cleaner look
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Balance Analytics</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceAnalytics;

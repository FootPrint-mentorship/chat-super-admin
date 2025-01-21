import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-center text-lg font-medium text-gray-700 mb-4">
        {title}
      </h3>
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#374151",
              },
            },
            y: {
              grid: {
                //   drawBorder: false,
              },
              ticks: {
                color: "#374151",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

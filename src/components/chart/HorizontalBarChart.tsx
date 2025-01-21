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

interface ChartProps {
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

const HorizontalBarChart: React.FC<ChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-center text-lg font-medium text-gray-700 mb-4">
        {title}
      </h3>
      <Bar
        data={data}
        options={{
          indexAxis: "y", // Horizontal bar chart
          responsive: true,
          plugins: {
            legend: {
              position: "bottom" as const,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-green-500"></span>
          <span className="text-sm text-gray-600">Male</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-green-300"></span>
          <span className="text-sm text-gray-600">Female</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBarChart;

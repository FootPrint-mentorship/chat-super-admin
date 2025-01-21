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

interface VendorTransactionChartProps {
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

const VendorTransactionChart: React.FC<VendorTransactionChartProps> = ({
  title,
  data,
}) => {
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
              display: false, // Hides the legend
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
                // drawBorder: false,
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

export default VendorTransactionChart;

// components/DonutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const DonutChart: React.FC<DonutChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-80">
      <h3 className="text-center text-lg font-medium text-gray-700 mb-4">
        {title}
      </h3>
      <Doughnut data={data} />
      <div className="flex justify-center mt-4 space-x-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center ">
            <span
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <span className="text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

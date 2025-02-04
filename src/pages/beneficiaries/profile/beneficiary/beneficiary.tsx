import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState("Today");

  const cardData = [
    { title: "Total Beneficiaries", value: "842,000", icon: "👥" },
    { title: "Total Received", value: "₦500,000,000.00", icon: "💰" },
    { title: "Total Spent", value: "₦412,000,000.00", icon: "📉" },
    { title: "Total Balance", value: "₦88,000,000.00", icon: "💵" },
  ];

  const barChartData = {
    labels: ["0-5", "6-12", "13-18", "19-23", "24-29", "30-39", "40-49"],
    datasets: [
      {
        label: "Male",
        backgroundColor: "#2F855A",
        data: [20000, 30000, 40000, 50000, 60000, 70000, 80000],
      },
      {
        label: "Female",
        backgroundColor: "#68D391",
        data: [15000, 25000, 35000, 45000, 55000, 65000, 75000],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-2">{card.icon}</span>
            <p className="text-gray-500 text-sm">{card.title}</p>
            <h2 className="text-2xl font-semibold">{card.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Gender</h3>
            <select className="border p-1 rounded-md" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <Bar data={barChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Beneficiary Distribution by Location</h3>
          <div>
            {["Kano", "Cross River", "Sokoto", "Kaduna", "Taraba"].map((state) => (
              <div key={state} className="mb-2">
                <p className="text-sm font-medium">{state}</p>
                <div className="bg-gray-200 h-3 rounded-md overflow-hidden">
                  <div className="bg-green-500 h-full w-[70%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

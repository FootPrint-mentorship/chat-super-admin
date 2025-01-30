import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Select from "@/components/select";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import Filter from "@/components/icon/Filter";
import ExcelIcon from "@/components/icon/ExcelIcon";

const tabItems = [
  { name: "Feedback", value: 1 },
  { name: "Complains", value: 2 },
];

const cashData = [
  { id: "135647", beneficiary: "Oliver Rhlye", email: "example@gmail.com"},
  { id: "253647", beneficiary: "Oliver Rhlye", email: "example@gmail.com"},
  { id: "3645678", beneficiary: "Oliver Rhlye", email: "example@gmail.com"},
  { id: "43646478", beneficiary: "Oliver Rhlye", email: "example@gmail.com" }
];

const itemsData = [
    { id: "1", beneficiary: " Declan Rice", email: "example@gmail.com"},
    { id: "2", beneficiary: " Declan Rice", email: "example@gmail.com"},
    { id: "3", beneficiary: " Declan Rice", email: "example@gmail.com"},
    { id: "4", beneficiary: " Declan Rice", email: "example@gmail.com" }
];
const ProjectFeedback = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(1); // Default to Cash
  const [listFilter, setListFilter] = useState("10"); // Fixed missing state
  const displayedData = activeTab === 1 ? cashData : itemsData;



  const toggleDropdown = () => {
    // Functionality for dropdown
  };

  return (
    <DashboardLayout title="Beneficiary - Profile" header="NGO">
    <div className="flex flex-col gap-8">
      {/* Search and Filters */}
      <div className="hidden lg:flex items-center justify-between w-full">
      {/* <DashboardStats /> */}
        <div className="flex gap-2 w-[50%]">
          <Input
            className="border-[#707FA3] rounded-lg text-[#707FA3] font-[400]"
            icon={<SearchIcon />}
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            size="md"
            text="Filter"
            variant="outlined"
            color="secondary"
            className="rounded-lg hover:bg-white"
            icon={<Filter />}
          />
        </div>
        <div className="flex gap-2">
          <Button icon={<ExcelIcon />} text="Export" variant="outlined" color="success" className="rounded-lg" />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
      <div className="px-4 flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Project Feedback</h2>
              <div>
            
              </div>
            </div>

        <div className="px-4 flex border-b">
          {tabItems.map((tab) => (
            <button
              key={tab.value}
              className={`flex-1 py-1 text-lg font-semibold ${
                activeTab === tab.value ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.name}
            </button>
          ))}

<label className="mr-2 mt-2 text-sm font-medium">Filter by:</label>
                <Select
                //   className={""}
                  size={"sm"}
                  placeholder = {"All Status"}
                  variant={"outlined"}
                  value={listFilter}
                  onChange={(value: string | number) => setListFilter(String(value))}
                  options={[
                    {
                      value: "today",
                      label: "Today",
                    },
                    {
                      value: "yesterday",
                      label: "Yesterday",
                    },

                    {
                      value: "Last 7 days",
                      label: "Last 7 days",
                    },
                    {
                      value: "Last 30 day",
                      label: "Last 30 day",
                    },
                    {
                      value: "Last 90 days",
                      label: "Last 90 days",
                    },
                  ]}
                />

        </div>

        {/* Table */}
        
        <div className="p-4">
            
          <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
            <thead className="h-[59px] bg-[#F7F7F7]">
            <tr className="bg-[#F7F7F7]">
                <th className="px-4 py-2 font-bold text-xs">Program ID</th>
                <th className="px-4 py-2 font-bold text-xs">Beneficiary</th>
                <th className="px-4 py-2 font-bold text-xs">Email</th>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item) => (
            
                <tr key={item.id} className="border-gray-200">
                      <td className="px-4 py-4 text-xs">{item.id}</td>
                      <td className="px-4 py-4 text-xs">
                          {item.beneficiary}
                  
                  </td>
                  
                  <td className="px-4 py-4 text-xs">{item.email}</td>
                  
                  <td className="px-4 py-2">
                      <button className="text-green-800 hover:text-green-700" onClick={toggleDropdown}>
                        View
                      </button>
                    </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Items Selection */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-start gap-4">
            <label className="mr-2 text-sm font-medium">Items</label>
            <Select
              size="sm"
              placeholder="10"
              variant="outlined"
              value={listFilter}
              onChange={(value: string | number) => setListFilter(String(value))}
              options={[
                { value: "10", label: "10" },
                { value: "20", label: "20" },
                { value: "30", label: "30" },
                { value: "40", label: "40" },
                { value: "50", label: "50" },
              ]}
            />
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-4">
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
              <path d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z" fill="#707FA3"/>
            </svg>

            <span className="text-sm">Showing 1 - 5 of 24</span>

            <svg width="6" height="13" viewBox="0 0 6 13" fill="none">
              <path d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z" fill="#707FA3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
      </DashboardLayout>
  );
};

export default ProjectFeedback;

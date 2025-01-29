
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Select from "@/components/select";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import Filter from "@/components/icon/Filter";
import PersonalDetailsCard from "@/components/content/project/card/PersonalDetailsCard";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import Card from "@/components/content/project/card/Card";
import { useRouter } from "next/router";

type Project = {
  id: string;
  name: string;
  tag: string;
  total: string;
  created: string;
  status: string;
  avatar: string;
};
 
const projects: Project[] = [
  {
    id: "1",
    name: "John Example",
    tag: "Cash",
    total: "+234705555555",
    created: "example@gmail.com",
    status: "Ongoing",
    avatar: "",
  },
  {
    id: "2",
    name: "John Example",
    tag: "Item",
    total: "+234705555555",
    created: "example@gmail.com",
    status: "Ended",
    avatar: "",
  },
];

const typeClasses: Record<string, string> = {
  Ended: "bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs",
  Ongoing: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
  Cash: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
  Item: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
};

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Beneficiaries",
      value: "842,000",
      icon: "👥",
      bgColor: "white",
      textColor: "text-blue-600",
    },
    {
      title: "Total Received",
      value: "₦500,000,000.00",
      icon: "💰",
      bgColor: "white",
      textColor: "text-green-600",
    },
    {
      title: "Total Spent",
      value: "₦412,000,000.00",
      icon: "📤",
      bgColor: "white",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="flex items-start gap-6 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center p-4 w-[260px] gap-[16px] h-[120px] rounded-lg shadow-md ${stat.bgColor}`}
        >
          <div className={`flex items-center justify-center gap-2 h-12 text-2xl rounded-full ${stat.textColor} bg-opacity-20`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ✅ Moved GoBackButton **outside** the component
const GoBackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="flex items-center text-indigo-600 hover:underline font-medium">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-600">
        <FaArrowLeft size={18} />
      </div>
      <span className="ml-2">Go Back</span>
    </button>
  );
};

const PersonalDetailsCards = () => {
  const [search, setSearch] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(new Set());
  const [listFilter, setListFilter] = useState<string | undefined>("10");

  const toggleCheckbox = (projectId: string) => {
    setSelectedProjects((prev) => {
      const updated = new Set(prev);
      if (updated.has(projectId)) updated.delete(projectId);
      else updated.add(projectId);
      return updated;
    });
  };

  const toggleDropdown = () => {
    // Functionality for dropdown
  };

  return (
    <div className="">
      <DashboardLayout title="Beneficiary - Profile" header="NGO">
        <GoBackButton />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-2 gap-[31px]">
            <DashboardStats />

            <div className="flex justify-start gap-[31px] items-center my-4">
              <Input
                className="w-1/3"
                placeholder="Search organizations..."
                value={search}
                icon={<SearchIcon />}
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

            <div className="px-4 flex justify-between items-center mb-4 bg-white p-2">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div>
                <label className="mr-2 text-sm font-medium">Filter by:</label>
                <Select
                  size="sm"
                  variant="outlined"
                  value={listFilter}
                  onChange={(value: string | number) => setListFilter(String(value))}
                  options={[
                    { value: "today", label: "Today" },
                    { value: "yesterday", label: "Yesterday" },
                    { value: "Last 7 days", label: "Last 7 days" },
                    { value: "Last 30 days", label: "Last 30 days" },
                    { value: "Last 90 days", label: "Last 90 days" },
                  ]}
                />
              </div>
            </div>

            <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F] mt-4 bg-white">
              <thead className="h-[59px]">
                <tr className="bg-[#F7F7F7]">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Tag</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Created</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-t">
                    <td className="px-4 py-2 flex items-center">{project.name}</td>
                    <td className="px-4 py-2">{project.tag}</td>
                    <td className="px-4 py-2">{project.total}</td>
                    <td className="px-4 py-2">{project.created}</td>
                    <td className="px-4 py-2">
                      <span className={typeClasses[project.status]}>{project.status}</span>
                    </td>
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

          <div className="relative top-[32px] right-[20px] gap-[10px]">
            <PersonalDetailsCard name="Hakeem Mensah" id="3355575" phoneNumber="+23470869658" location="" created="" status="Verified" imageUrl="" email="" />
          </div>
          <div className="px-4 py-4 flex justify-between items-center mt-4">
        <div>
          <label className="mr-2 text-sm font-medium">Items</label>
          <Select
  size={"sm"}
  placeholder={"10"}
  variant={"outlined"}
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
        </div>
        <div className="flex items-center gap-4">
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
              fill="#707FA3"
            />
          </svg>

          <span className="text-sm">Showing 1 - 5 of 24</span>

          <svg
            width="6"
            height="13"
            viewBox="0 0 6 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
              fill="#707FA3"
            />
          </svg>
        </div>
      </div>
      </DashboardLayout>
    </div>
  );
};

export default PersonalDetailsCards;

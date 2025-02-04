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
    name: "Feed the Poor",
    tag: "Cash",
    total: "#5,0000",
    created: "August 2, 2013",
    status: "Ongoing",
    avatar: "",
  },
  {
    id: "2",
    name: "Feed the Poor",
    tag: "Item",
    total: "#5,0000",
    created: "August 2, 2013",
    status: "Ended",
    avatar: "",
  },
  {
    id: "3",
    name: "Feed the Poor",
    tag: "Cash",
    total: "#5,0000",
    created: "August 2, 2013",
    status: "Ongoing",
    avatar: "",
  },
  {
    id: "4",
    name: "Feed the Poor",
    tag: "Item",
    total: "#5,0000",
    created: "August 2, 2013",
    status: "Ended",
    avatar: "",
  },
];

const typeClasses: Record<string, string> = {
  Ended: "bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs",
  Ongoing: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
  Cash: "bg-green-100 text-blue-700 rounded-full px-2 py-1 text-xs",
  Item: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
};

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Beneficiaries",
      value: "842,000",
      icon: "💰",
      iconBgColor: "bg-green-500", // Gold for money
      textColor: "text-white",
    },
    {
      title: "Total Received",
      value: "₦500,000,000.00",
      icon: "👥",
      iconBgColor: "bg-red-500", // Blue for people
      textColor: "text-white",
    },
    {
      title: "Total Spent",
      value: "₦412,000,000.00",
      icon: "📤",
      iconBgColor: "bg-purple-500", // Red for spending
      textColor: "text-white",
      bgColor: "white",
    },
  ];

  return (
    <div className="flex items-start gap-10 mt-3 p-[1px]   ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center p-4 w-[260px] gap-[16px] h-[120px] rounded-lg shadow-md bg-white ${stat.bgColor}`}
        >
          <div
            className={`flex items-center justify-center  text-2xl rounded-md w-[56px] h-[56px] top-[16px] left-[20px] gap-0 opacity-100
 ${stat.iconBgColor} ${stat.textColor}`}
          >
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

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-black hover:underline font-medium"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-300">
        <FaArrowLeft size={18} />
      </div>
      <span className="ml-2">Go Back</span>
    </button>
  );
};

const PersonalDetailsCards = () => {
  const [search, setSearch] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(
    new Set()
  );
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12  ">
          <div className="col-span-2 gap-12">
            <DashboardStats />

            <div className="flex justify-start  gap-[10px] items-center my-4">
              <Input
                className={
                  "border-[#707FA3] rounded-lg text-[#707FA3] font-[400] w-[303px] bg-[] "
                }
                icon={<SearchIcon />}
                placeholder={"Search organizations..."}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button
                size="md"
                text="Filter"
                variant="outlined"
                color="secondary"
                className="rounded-lg hover:bg-white w-[120px]"
                icon={<Filter />}
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm ">
              <div className="px-4 flex justify-between items-center  h-[70px] p-[15px] pr-[20px] pl-[24px]">
                <h2 className="text-xl font-semibold">Projects</h2>
                {/* <div></div> */}
                <div>
                  <label className="mr-2 text-sm font-medium">Filter by:</label>
                  {/* <div className="bg-white p-8"></div> */}
                  <Select
                    size="sm"
                    variant="outlined"
                    value={listFilter}
                    onChange={(value: string | number) =>
                      setListFilter(String(value))
                    }
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
            </div>

            <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
              <thead className="h-[59px]">
                <tr className="bg-[#F7F7F7]">
                  <th className="px-4 py-2">Name</th>

                  <th className="px-4 py-2">Tag</th>
                  <th className="px-4  py-2">Total</th>
                  <th className="px-4 py-2">Created</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-t bg-[#FFFFFF] border-gray-100 rounded-sm h-[78px] w-full"
                  >
                    <td className="px-4 py-4  flex items-center ">
                      {project.name}
                    </td>
                    <td className="px-4 py-2">
                      <span className={typeClasses[project.tag]}>
                        {project.tag}
                      </span>
                    </td>
                    <td className="px-4 py-2 h-[78px] ">{project.total}</td>
                    <td className="px-4 py-2">{project.created}</td>
                    <td className="px-4 py-2">
                      <span className={typeClasses[project.status]}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="text-green-800 hover:text-green-700"
                        onClick={toggleDropdown}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-4 flex justify-between items-center bg-white">
              <div className="flex items-start gap-4">
                <label className="mr-2 text-sm font-medium">Items</label>
                <Select
                  size="sm"
                  placeholder="10"
                  variant="outlined"
                  value={listFilter}
                  onChange={(value: string | number) =>
                    setListFilter(String(value))
                  }
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
              <div className="flex items-center gap-4 bg-white">
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
                  <path
                    d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
                    fill="#707FA3"
                  />
                </svg>

                <span className="text-sm">Showing 1 - 5 of 24</span>

                <svg width="6" height="13" viewBox="0 0 6 13" fill="none">
                  <path
                    d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
                    fill="#707FA3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative top-[14px] right-[20px] gap-[10px]">
            <PersonalDetailsCard
              name="Hakeem Mensah"
              id="3355575"
              phoneNumber="+23470869658"
              location=""
              created=""
              status="Verified"
              imageUrl=""
              email=""
            />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PersonalDetailsCards;

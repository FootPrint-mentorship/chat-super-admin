
import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Select from "@/components/select";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import AddIcon from "@/components/icon/AddIcon";
import Filter from "@/components/icon/Filter";
import ExcelIcon from "@/components/icon/ExcelIcon";
import AddVendorForm from "@/components/modal/project/AddVendorForm";

type Project = {
  name: string;
  emailaddress: string;
  amountsold: string;
  ngoscampaign: string;
  status: "Active" | "Inactive";
  actions: string;
};

const projects: Project[] = [
  {
    name: "JamesWoodpecker",
    emailaddress: "example@gmail.com",
    amountsold: "$10,0505,000",
    ngoscampaign: "1/4",
    status: "Active",
    actions: "",
  },
  {
    name: "JamesWoodpecker",
    emailaddress: "example@gmail.com",
    amountsold: "$10,0505,000",
    ngoscampaign: "3/9",
    status: "Active",
    actions: "",
  },
  {
    name: "JamesWoodpecker",
    emailaddress: "example@gmail.com",
    amountsold: "$10,509,000",
    ngoscampaign: "1/4",
    status: "Active",
    actions: "",
  },
  {
    name: "JamesWoodpecker",
    emailaddress: "example@gmail.com",
    amountsold: "$10,509,000",
    ngoscampaign: "3/5",
    status: "Active",
    actions: "",
  },
];

const typeClasses = {
  Inactive: "bg-[#E7EBF3] text-red-700 rounded-full text-xs font-medium",
  Active: "bg-[#D1F7C4] text-[#337138] rounded-full text-xs font-medium",
};

const DonorsLayout = () => {
  const [search, setSearch] = useState("");
  const [isAddVendorModalOpen, setAddVendorModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [listFilter, setListFilter] = useState<string | undefined>("10");
  
  const handleAddVendorModal = () => setAddVendorModalOpen(true);
  const handleCloseAddVendorModal = () => setAddVendorModalOpen(false);

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-white">
      <DashboardLayout title="Vendors" header="NGO">
        <div className="flex flex-col gap-8">
          <div className={"hidden lg:flex items-center justify-between w-full"}>
            <div className={"flex gap-2 w-[50%]"}>
              <Input
                className={"border-[#707FA3] rounded-lg text-[#707FA3] font-[400]"}
                icon={<SearchIcon />}
                placeholder={"Search organizations..."}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button
                size={"md"}
                text={"Filter"}
                variant={"outlined"}
                color={"secondary"}
                className={"rounded-lg hover:bg-white"}
                icon={<Filter />}
              />
            </div>
            <div className={"flex gap-2"}>
              <Button
                icon={<ExcelIcon />}
                text={"Export"}
                variant={"outlined"}
                color={"success"}
                className={"rounded-lg"}
              />
              <Button
                onClick={handleAddVendorModal}
                icon={<AddIcon />}
                text={"Add Vendor"}
                variant={"contained"}
                color={"success"}
                className={"rounded-lg"}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="px-4 flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Vendors</h2>
              <div>
        <label className="mr-2 text-sm font-medium">Filter by:</label>
        <Select
        className={""}
        size={"sm"}
        variant={"outlined"}
        value={listFilter}
        onChange={(e) => {
          setListFilter(e.target.value);
        }}
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
            </div>

            <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
              <thead className="h-[59px]">
                <tr className="bg-[#F7F7F7]">
                  <th className="px-4 py-2 font-bold text-xs">Name</th>
                  <th className="px-12 py-2 font-bold text-xs">Email-Address</th>
                  <th className="px-4 py-2 font-bold text-xs">Amount sold</th>
                  <th className="px-8 py-2 font-bold text-xs">NGOs/Campaigns</th>
                  <th className="px-4 py-2 font-bold text-xs">Status</th>
                  <th className="px-4 py-2 font-bold text-xs">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className=" border-gray-200">
                    <td className="px-4 py-6 text-xs">{project.name}</td>
                    <td className="px-12 py-6 text-xs">{project.emailaddress}</td>
                    <td className="px-4 py-6 text-xs">{project.amountsold}</td>
                    <td className="px-8 py-6 text-xs">{project.ngoscampaign}</td>
                    <td>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-lg ${typeClasses[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="relative px-6 py-6 text-xs">
                      <button
                        className="text-gray-800 hover:text-gray-700"
                        onClick={() => toggleDropdown(index)}
                      >
                        &#x22EE;
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute right-0 z-10 mt-2  bg-white rounded-md shadow-lg border">
                          <button
                            onClick={closeDropdown}
                            className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 focus:outline-none"
                          >
                            ✕
                          </button>
                          <ul className="py-2 text-gray-700 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Activate</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deactivate</li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {isAddVendorModalOpen && <AddVendorForm onClose={handleCloseAddVendorModal} />}
      </DashboardLayout>
    </div>
  );
};

export default DonorsLayout;

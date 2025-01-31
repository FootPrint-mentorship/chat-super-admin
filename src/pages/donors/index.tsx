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
  id: string;
  idNumber: string;
  vendor: string;
  address: string;
  statecountry: string;
  phoneNumber: string;
  email:string;
  verification: "verified" | "unverified";
  accountCreated: string;
  avatar: string;
};

const projects: Project[] = [
  {
    id: "1",
    idNumber: "1234",
    vendor: "Tomas Partey",
    address: "1 Asokoro Street",
    statecountry: "Abuja, Nigeria",
    phoneNumber: "+234809605749",
    email: "example@yahoo.com",
    verification: "verified",
    accountCreated: "12, Dec, 2012",
    avatar: "",
  },
  {

    id: "2",
    idNumber: "1234",
    vendor: "Tomas Partey",
    address: "1 Asokoro Street",
    statecountry: "Abuja, Nigeria",
    phoneNumber: "+234809605749",
    email: "example@yahoo.com",
    verification: "unverified",
    accountCreated: "12, Dec, 2012",
    avatar: "",
  },
  {
    id: "3",
    idNumber: "1234",
    vendor: "Tomas Partey",
    address: "1 Asokoro Street",
    statecountry: "Abuja, Nigeria",
    phoneNumber: "+234809605749",
    email: "example@yahoo.com",
    verification: "unverified",
    accountCreated: "12, Dec, 2012",
    avatar: "",
  },
  {
    id: "4",
    idNumber: "1234",
    vendor: "Tomas Partey",
    address: "1 Asokoro Street",
    statecountry: "Abuja, Nigeria",
    phoneNumber: "+234809605749",
    email: "example@yahoo.com",
    verification: "unverified",
    accountCreated: "12, Dec, 2012",
    avatar: "",
  },
];

const typeClasses = {
  verified: "bg-[#17CE89] text-white rounded-full text-xs font-medium",
  unverified: "bg-[#F2994A] text-white rounded-full text-xs font-medium",
};

const DonorsLayout = () => {
  const [search, setSearch] = useState("");
  const [isAddVendorModalOpen, setAddVendorModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [listFilter, setListFilter] = useState<string | undefined>("10");
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(
    new Set()
  );

  const handleAddVendorModal = () => setAddVendorModalOpen(true);
  const handleCloseAddVendorModal = () => setAddVendorModalOpen(false);

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const DashboardStats = () => {
    const stats = [
      {
        title: "Transaction Values",
        value: "#232, 842,000",
        icon: "💰",
        iconBgColor: "bg-[#9694FF]", // Gold for money
        textColor: "text-white",
      },
      {
        title: "Transaction Counts",
        value: "₦401",
        icon: "👥",
        iconBgColor: "bg-red-500", // Blue for people
        textColor: "text-white",
      },
      {
        title: "Total Vendors",
        value: "₦8260,0000",
        icon: "📤",
        iconBgColor: "bg-[#17CE89]", // Red for spending
        textColor: "text-white",
        bgColor: "white",
      },
      {
        title: "Product Sold",
        value: "₦42600",
        icon: "📤",
        iconBgColor: "bg-[#57CAEB]", // Red for spending
        textColor: "text-white",
        bgColor: "white",
      },
    ];

    return (
      <div className="flex items-start gap-10 mb-12 w-full ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-4 w-[350px] gap-[16px] h-[120px] rounded-lg shadow-md bg-white ${stat.bgColor}`}
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


  const toggleCheckbox = (projectId: string) => {
    setSelectedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) newSet.delete(projectId);
      else newSet.add(projectId);
      return newSet;
    });
  };

  const toggleSelectAll = (selectAll: boolean) => {
    if (selectAll) {
      setSelectedProjects(new Set(projects.map((project) => project.id)));
    } else {
      setSelectedProjects(new Set());
    }
  };

  return (
    <div className="">
      <DashboardLayout title="Vendors" header="NGO">
        <div className="col-span-2 gap-12 ">
          <DashboardStats />
          <div className="flex flex-col gap-8">
            <div
              className={"hidden lg:flex items-center justify-between w-full"}
            >
              <div className={"flex gap-2  "}>
                <Input
                  className={
                    "border-[#707FA3] rounded-lg text-[#707FA3] font-[400px] w-[350px] h-[45px]"
                  }
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
                  className={"rounded-lg hover:bg-white w-[120px] "}
                  icon={<Filter />}
                />
              </div>
              <div className={"flex gap-2 "}>
                <Button
                  icon={<ExcelIcon />}
                  text={"Export"}
                  variant={"outlined"}
                  color={"success"}
                  className={"rounded-lg  h-[44px] w-[132px"}
                />
                <Button
                  onClick={handleAddVendorModal}
                  icon={<AddIcon />}
                  text={"invite Vendor"}
                  variant={"contained"}
                  color={"success"}
                  className={"rounded-lg h-[44px] w-[173px]"}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm ">
              <div className="px-4 flex justify-between items-center  h-[70px] p-[15px] pr-[20px] pl-[24px]">
                <h2 className="text-xl font-semibold">Vendors List</h2>
                <div>
                  <label className="mr-2 text-sm font-medium">Filter by:</label>
                  <Select
                    className={""}
                    size={"sm"}
                    variant={"outlined"}
                    value={listFilter}
                    onChange={(value: string | number) =>
                      setListFilter(String(value))
                    }
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
                <th className="px-4 py-2 font-bold text-xs">
                    <input
                      type="checkbox"
                      className="mr-1 h-[24px] w-[24px] gap-2 rounded-tl-[4px] border-l border-opacity-0"
                      onChange={(e) => toggleSelectAll(e.target.checked)}
                      checked={selectedProjects.size === projects.length}
                    />
                    
                  </th>
                    <th className="px-4 py-2 font-bold text-xs  h-[20px] gap-0 rounded-tl-[6px] border-t border-gray-200 opacity-100">Vendor</th>
                    <th className="px-4 py-2 font-bold text-xs">
                     Address
                    </th>
                    <th className="px-4 py-2 font-bold text-xs">State/Country</th>
                    <th className="px-8 py-2 font-bold text-xs">
                    Phone Number
                    </th>
                    <th className="px-8 py-2 font-bold text-xs">
                   Email Address
                    </th>
                    <th className="px-4 py-2 font-bold text-xs">Verification</th>
                    <th className="px-4 py-2 font-bold text-xs">Account Created</th>
                    <th className="px-4 py-2 font-bold text-xs"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr
                      key={index}
                      className=" border-t bg-[#FFFFFF] border-gray-100 rounded-sm h-[78px] w-full"
                    >
                      <th className="px-4 py-2 font-bold text-xs  h-[20px] gap-0 rounded-tl-[6px] border-t border-gray-200 opacity-100">
                      <input
                        type="checkbox"
                        checked={selectedProjects.has(project.id)}
                        onChange={() => toggleCheckbox(project.id)}
                      className="mr-1 h-[24px] w-[24px] gap-2 rounded-tl-[4px] border-l border-opacity-0"
                      />
                   
                  </th>
                      <td className="px-2 py-6 text-xs flex">
                      <img
                        src={project.avatar}
                        alt={`${project.vendor}'s Avatar`}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                        {project.vendor}</td>
                      <td className="px-2 py-6 text-xs">
                        {project.address}
                      </td>
                      <td className="px-2 py-6 text-xs">
                        {project.statecountry}
                      </td>
                      <td className="px-2 py-6 text-xs">
                        {project.phoneNumber}
                      </td>
                      <td className="px-2 py-6 text-xs">
                        {project.email}
                      </td>
                      <td>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-lg ${
                            typeClasses[project.verification]
                          }`}
                        >
                          {project.verification}
                        </span>
                      </td>
                      <td className="px-2 py-6 text-xs">
                        {project.accountCreated}
                      </td>
                      <td className="relative px-6 py-6 text-xs">
                        <button
                          className="text-[#17CE89] hover:text-black-700"
                          onClick={() => toggleDropdown(index)}
                        >
                          View
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
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                View
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Activate
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Deactivate
                              </li>
                            </ul>
                          </div>
                        )}
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
                  placeholder="20"
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
            
          </div>
        </div>
        
        {isAddVendorModalOpen && (
          <AddVendorForm onClose={handleCloseAddVendorModal} />
        )}
      </DashboardLayout>
    </div>
  );
};

export default DonorsLayout;

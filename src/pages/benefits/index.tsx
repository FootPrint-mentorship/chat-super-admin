import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Select from "@/components/select";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import AddIcon from "@/components/icon/AddIcon";
import Filter from "@/components/icon/Filter";
import ExcelIcon from "@/components/icon/ExcelIcon";
import AddBeneficiaries from "@/components/chart/project/AddBeneficiaries";

type Project = {
  id: string;
  beneficiary: string;
  phoneNumber: string;
  email: string;
  dateofbirth: string;
  gender:string;
  verification: "Verified" | "Unverified";
  
  date: string;
  avatar: string;
};

const projects: Project[] = [
  {
    id: "1",
    beneficiary: "Lasly Alexander",
    phoneNumber: "+234705555555",
    email: "example@gmail.com",
    dateofbirth: "14th-April-2001",
    verification: "Verified",
    gender: "Male",
    date: "12-Dec-2022",
    avatar: "/public/Avatar.png",
  },
  {
    id: "2",
    beneficiary: "Lasly Alexander",
    phoneNumber: "+234705555555",
    email: "example@gmail.com",
    gender:"Male",
    dateofbirth: "14th-April-2001",
    verification: "Verified",
    date: "12-Dec-2022",
    avatar: "/public/Avatar.png",
  },
  {
    id: "3",
    beneficiary: "Lasly Alexander",
    phoneNumber: "+234705555555",
    email: "example@gmail.com",
    dateofbirth: "14th-April-2001",
    gender:"Female",
    verification: "Verified",
    date: "12-Dec-2022",
    avatar: "/public/Avatar.png",
  },
  {
    id: "4",
    beneficiary: "Lasly Alexander",
    phoneNumber: "+234705555555",
    email: "example@gmail.com",
    dateofbirth: "14th-April-2001",
    gender:"Female",
    verification: "Unverified",
    date: "12-Dec-2022",
    avatar: "/public/Avatar.png",
  },
];




const DashboardStats = () => {
  // const stats = [
  //   {
  //     title: "Total Beneficiaries",
  //     value: "842,000",
  //     icon: "👥",
  //     bgColor: "white",
  //     textColor: "text-blue-600",
  //   },
  //   {
  //     title: "Total Received",
  //     value: "₦500,000,000.00",
  //     icon: "💰",
  //     bgColor: "white",
  //     textColor: "text-green-600",
  //   },
  //   {
  //     title: "Total Spent",
  //     value: "₦412,000,000.00",
  //     icon: "📤",
  //     bgColor: "white",
  //     textColor: "text-red-600",
  //   },
  //   {
  //     title: "Total Balance",
  //     value: "₦88,000,000.00",
  //     icon: "💵",
  //     bgColor: "white",
  //     textColor: "text-purple-600",
  //   },
  // ];
   
 


  // return (
  //   // <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
  //   //   {stats.map((stat, index) => (
  //   //     <div
  //   //       key={index}
  //   //       className={`flex items-center p-4 rounded-lg shadow-md ${stat.bgColor}`}
  //   //     >
  //   //       <div
  //   //         className={`flex items-center justify-center w-12 h-12 text-2xl rounded-full ${stat.textColor} bg-opacity-20`}
  //   //       >
  //   //         {stat.icon}
  //   //       </div>
  //   //       <div className="ml-4">
  //   //         <p className="text-sm font-medium text-gray-600">{stat.title}</p>
  //   //         <p className="text-xl font-bold text-gray-800">{stat.value}</p>
  //   //       </div>
  //   //     </div>
  //   //   ))}
  //   // </div>
  // );
};

const typeClasses: Record<string, string> = {
  Verified: "bg-[#E7EBF3] text-red-700 rounded-full text-xs font-medium",
  Unverified: "bg-[#D1F7C4] text-[#337138] rounded-full text-xs font-medium",
};

const DonorsLayouts = () => {
  const [search, setSearch] = useState("");
  const [isAddVendorModalOpen, setAddVendorModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [listFilter, setListFilter] = useState<string | undefined>("10");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(
    new Set()
  );

  const handleAddVendorModal = () => setAddVendorModalOpen(true);
  // const handleCloseAddVendorModal = () => setAddVendorModalOpen(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
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

  

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
  };


  return (
    <div className="bg-white">
      <DashboardLayout title="Beneficiary" header="NGO">
        {/* <DashboardStats /> */}

        <div className="flex flex-col gap-8">
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex gap-2 w-[50%]">
              <Input
                className="border-[#707FA3] rounded-lg text-[#707FA3] font-[400]"
                icon={<SearchIcon />}
                placeholder="Search organizations..."
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
              {/* <Button
                onClick={handleAddVendorModal}
                icon={<AddIcon />}
                text="Add Beneficiaryr"
                variant="contained"
                color="success"
                className="rounded-lg"
                /> */}
                <Button
                  icon={<ExcelIcon />}
                  text="Export"
                  variant="outlined"
                  color="success"
                  className="rounded-lg"
                />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="px-4 flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">All Beneficiaries</h2>
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

            <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
              <thead className="h-[59px]">
                <tr className="bg-[#F7F7F7]">
                  <th className="px-4 py-2 font-bold text-xs ">
                    <input
                      type="checkbox"
                      className="mr-1"
                      onChange={(e) => toggleSelectAll(e.target.checked)}
                      checked={selectedProjects.size === projects.length}
                    />
                    ID Agencies
                  </th>
                  <th className="px-12 py-2 font-bold text-xs">Beneficiary</th>
                  <th className="px-4 py-2 font-bold text-xs">Phone-Number</th>
                  <th className="px-8 py-2 font-bold text-xs">Email</th>
                  <th className="px-8 py-2 font-bold text-xs">Gender</th>
                  <th className="px-4 py-2 font-bold text-xs">Date Of Birth</th>
                  <th className="px-4 py-2 font-bold text-xs">Verifications</th>
                  <th className="px-4 py-2 font-bold text-xs"></th>
                  <th className="px-4 py-2 font-bold text-xs"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={project.id} className="border-gray-200">
                    <td className="px-4 py-6 text-xs">
                      <input
                        type="checkbox"
                        checked={selectedProjects.has(project.id)}
                        onChange={() => toggleCheckbox(project.id)}
                      />
                    </td>
                    <td className="px-12 py-6 flex text-xs">
                      <img
                        src={project.avatar}
                        alt={`${project.beneficiary}'s Avatar`}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {project.beneficiary}
                    </td>
                    <td className="px-4 py-6 text-xs">{project.phoneNumber}</td>
                    <td className="px-8 py-6 text-xs">{project.email}</td>
                    <td className="px-8 py-6 text-xs">{project.gender}</td>
                    <td className="px-8 py-6 text-xs">{project.dateofbirth}</td>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-lg ${
                        typeClasses[project.verification]
                      }`}
                    >
                      {project.verification}
                    </span>
                    {/* <td className="px-8 py-6 text-xs">{project.origination}</td> */}
                    {/* <td className="px-8 py-6 text-xs">{project.date}</td> */}
                    <td></td>
                    <td className="relative px-6 py-6 text-xs">
                      <button
                        className="text-green-800 hover:text-green-700"
                        onClick={() => toggleDropdown(index)}
                      >
                       View
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute right-0 z-10 mt-2 bg-white rounded-md shadow-lg border">
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
          </div>
        </div>
        {isAddVendorModalOpen && (
          <AddBeneficiaries  onClose={handleClose}/>
        )}
      </DashboardLayout>
    </div>
  );
};

export default DonorsLayouts;
// function setModalOpen(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }


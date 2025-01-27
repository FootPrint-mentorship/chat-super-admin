import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Select from "@/components/select";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import Filter from "@/components/icon/Filter";
import PersonalDetailsCard from "@/components/content/project/card/PersonalDetailsCard";
import { FaMoneyBill, FaShoppingCart, FaBox, FaBoxOpen } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import Card from "@/components/content/project/card/Card"

type Project = {
  name: string;
  tag: string;
  total: string;
  created: string;
  status: string;
  avatar:string;
 
};

const projects: Project[] = [
  {
    name: "1",
    tag: "Cash",
    total: "+234705555555",
    created: "example@gmail.com",
    status: "Ongoing",
    avatar:"",
  },
   
  {
    name: "1",
    tag: "Item",
    total: "+234705555555",
    created: "example@gmail.com",
    status: "Ended",
    avatar:"",
  },
  // Additional project entries...
];

const typeClasses: Record<string, string> = {
  Ended: "bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs",
  Ongoing: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
  Cash: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
  Item: "bg-red-100 text-red-700 rounded-full px-2 py-1 text-xs",
};

const DashboardStats = () => {
    const cards = [
        {
          icon: <FaMoneyBill className="text-green-500 w-6 h-6" />,
          title: "Total Received",
          value: "₦50,000.00",
          bgColor: "#FFFFFF",
        },
        {
          icon: <FaShoppingCart className="text-red-500 w-6 h-6" />,
          title: "Total Spent",
          value: "₦45,000.00",
          bgColor: "#FFFFFF",
        },
        {
          icon: <HiOutlineCash className="text-blue-500 w-6 h-6" />,
          title: "Total Balance",
          value: "₦5,000.00",
          bgColor: "#FFFFFF",
        },
        {
          icon: <FaBox className="text-purple-500 w-6 h-6" />,
          title: "Item Received",
          value: "30,000",
          bgColor: "#FFFFFF",
        },
        {
          icon: <FaBoxOpen className="text-green-500 w-6 h-6" />,
          title: "Items Redeemed",
          value: "20,000",
          bgColor: "#FFFFFF",
        },
        {
          icon: <FaBox className="text-orange-500 w-6 h-6" />,
          title: "Items Balance",
          value: "10,000",
          bgColor: "#FFFFFF",
        },
      ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-6">
    {cards.map((card, index) => (
      <Card
        key={index}
        icon={card.icon}
        title={card.title}
        value={card.value}
        bgColor={card.bgColor}
      />
    ))}
  </div>
);
};


const PersonalDetailsCards = () => {
  const [search, setSearch] = useState("");
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(new Set());

  const toggleCheckbox = (projectId: string) => {
    setSelectedProjects((prev) => {
      const updated = new Set(prev);
      if (updated.has(projectId)) updated.delete(projectId);
      else updated.add(projectId);
      return updated;
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
    <>
    <div className="bg-white">

    <DashboardLayout title="Beneficiaries" header="NGO">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
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
          <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
              <thead className="h-[59px]">
                <tr className="bg-[#F7F7F7]">
              {/* <tr> */}
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Tag</th>
              <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Created</th>
              <th className="px-4 py-2"></th>
                {/* <th className="px-4 py-2"></th> */}
                <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.name} className="border-t">
                 
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={project.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {project.name}
                  </td>
                  <td className="px-4 py-2">{project.tag}</td>
                  <td className="px-4 py-2">{project.total}</td>
                  <td className="px-4 py-2">{project.created}</td>
                  <td className="px-4 py-2">
                    <span className={typeClasses[project.status]}>
                      {project.status}
                    </span>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="relative top-[256px]">
          <PersonalDetailsCard name={"Hakeem Mensah"} id={"3355575"} phoneNumber={"+23470869658"} location={""} created={""} status={"Verified"} imageUrl={""} email={""} />
        </div>
      </div>
    </DashboardLayout>

    </div>
    </>
  );
};

export default PersonalDetailsCards;

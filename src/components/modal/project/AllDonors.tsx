import DashboardLayout from "@/components/layout/dashboardLayout";
import React, { useState } from "react";
import Select from "@/components/select";
import ActionModal from "@/components/modal/project/ActionModal";
import ArrowDownIcon from "@/components/icon/ArrowDownIcon";
import { Button } from "flowbite-react/components/Button";
import Filter from "@/components/icon/Filter";

type Project = {
  transactionID: string;
  amount: string;
  campaign: string;
  date: string;
  type: "Witheld-request" |  "Funding";
  actions: string;

};

const projects: Project[] = [
  {
    transactionID: "0askcvhkvcjhwbckjwcwcwc",
    amount: "$123,476.000",
    campaign: "Feed the poor",
    date: "12 Dec 2020",
    type: "Funding",
    actions: "",
  },
  {
    transactionID: "0askcvhkvcjhwbckjwcwcwc",
    amount: "$123,476.000",
    campaign: "Feed the poor",
    date: "12 Dec 2020",
    type: "Witheld-request",
    actions: "",
  },
  {
    transactionID: "0askcvhkvcjhwbckjwcwcwc",
    amount: "$123,476.000",
    campaign: "Feed the poor",
    date: "12 Dec 2020",
    type: "Witheld-request",
    actions: "",
  },
  {
    transactionID: "0askcvhkvcjhwbckjwcwcwc",
    amount: "$123,476.000",
    campaign: "Feed the poor",
    date: "12 Dec 2020",
    type: "Witheld-request",
    actions: "",
  },
];

const typeClasses = {
    "Witheld-request": `
      bg-red-100 text-red-700 rounded-full 
      font-gilroy text-[12px] font-normal leading-[14.4px] tracking-[0.01em] text-left 
      underline-offset-from-font decoration-skip-ink-none
    `,
    Funding: `
      bg-[#D1F7C4] text-gray-500 rounded-full 
      font-gilroy text-[12px] font-normal leading-[14.4px] tracking-[0.01em] text-left 
      underline-offset-from-font decoration-skip-ink-none
    `,
   
  };
  

interface AllDonorsProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSelectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllDonors: React.FC<AllDonorsProps> = ({
  setSearch,
  search,
  setSelectModalOpen,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [listFilter, setListFilter] = useState<string | undefined>("10");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



  const setListFilterBy = (value: string | number) => {
    console.log("Filtering by:", value);
  };


  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-4 flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Donor Transactions</h2>
        <div className={"flex gap-2 w-[50%]"}>
          <Button
            size={"md"}
            text={"Filter"}
            variant={"outlined"}
            color={"secondary"}
            className={"rounded-lg hover:bg-white"}
            icon={<Filter />}
          />
        </div>

        <div>
          <label className="mr-2 text-sm font-medium">Filter by:</label>
          <Select
            className={""}
            size={"sm"}
            variant={"outlined"}
            value={listFilter}
            onChange={(e) => {
                setListFilterBy(e);
              }}
            options={[
              { value: "today", label: "Today" },
              { value: "yesterday", label: "Yesterday" },
              { value: "Last 7 days", label: "Last 7 days" },
              { value: "Last 30 day", label: "Last 30 day" },
              { value: "Last 90 days", label: "Last 90 days" },
            ]}
          />
        </div>
      </div>

      <table className="w-full text-left text-[16px] font-medium border-collapse text-[#25396F]">
        <thead className="h-[59px]">
          <tr className="bg-[#F7F7F7]">
            <th className="px-4 py-2 font-bold text-xs">TransactionID</th>
            <th className="px-12 py-2 font-bold text-xs">Amount</th>
            <th className="px-4 py-2 font-bold text-xs">Campaigns</th>
            <th className="px-8 py-2 font-bold text-xs">Date</th>
            <th className="px-4 py-2 font-bold text-xs">Type</th>
            <th className="px-4 py-2 font-bold text-xs">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="px-4 py-6 text-xs">{project.transactionID}</td>
              <td className="px-12 py-6 text-xs">{project.amount}</td>
              <td className="px-3 py-6 text-xs">{project.campaign}</td>
              <td className="px-6 py-6 text-xs">{project.date}</td>
              <td>
              <span
  className={`text-xs font-medium px-2 py-1 rounded-lg ${
    typeClasses[project.type as keyof typeof typeClasses] || "bg-gray-200 text-gray-800"
  }`}
  onClick={handleOpenModal}
>
  {project.type}
</span>

              </td>
              <td className="px-6 py-6 text-xs">
              {project.actions}
                <button
                  className="text-gray-800 hover:text-gray-700"
                  
                >
                  &#x22EE;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && <ActionModal onClose={handleCloseModal} />}

      <div className="px-4 py-4 flex justify-between items-center mt-4">
        <div>
          <label className="mr-2 text-sm font-medium">Items</label>
          <Select
  size={"sm"}
  placeholder={"10"}
  variant={"outlined"}
  value={listFilter}
  onChange={(e) => {
    setListFilterBy(e);
  }}
  options={[
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
  ]}
/>
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
    </div>
  );
};

export default AllDonors;

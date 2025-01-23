import React, { useState } from "react";
import Select from "@/components/select";
import ActionModal from "@/components/modal/project/ActionModal";
import WithdrawalModal from "./WithdrawalModal";
import WithholdRequest from "./WithholdRequest";

const WithdrawalRequest: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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

  const projects = [
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
    "Witheld-request": "bg-red-100 text-red-700 rounded-full font-gilroy",
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-4 flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Withdrawal Requests</h2>
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
                  className={`text-xs font-medium px-2 py-1 rounded-lg ${typeClasses[project.type as keyof typeof typeClasses]}`}
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

      {isModalOpen && <WithholdRequest onClose={handleCloseModal} />}
    </div>
  );
};

export default WithdrawalRequest;

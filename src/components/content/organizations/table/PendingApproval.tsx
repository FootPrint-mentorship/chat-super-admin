import React, { useState } from "react";
import CashProjectForm from "@/components/modal/project/CashProjectForm";
import Select from "@/components/select";
import ItemProjectForm from "@/components/modal/project/ItemProjectForm";
import ArchiveProjectModal from "@/components/modal/project/ArchiveProjectModal";
import DeleteCampaignModal from "@/components/modal/project/DeleteCampaign";
import PauseProjectModal from "@/components/modal/project/PauseProjectMoadal";
import Link from "next/link";
import ArrowDownIcon from "@/components/icon/ArrowDownIcon";
import { Button } from "flowbite-react";
import LivenessCapture from "@/components/modal/project/LivenessCapture";

interface ProjectTableProps {
  setIsOpen: React.Dispatch<React.SetStateAction<"item" | "cash" | undefined>>;
  isOpen?: "item" | "cash" | undefined;
}

type Project = {
  OrganizationName: string;
  emailAddress: string;
  FirstName: string;
  LastName: string;
  date: string;
  KYCstatus: "successful" | "unsuccessful";
  actions: string;
};

const projects: Project[] = [
  {
    OrganizationName : "Blue Orange Foundation",
    emailAddress: "example@gmail.com",
    FirstName: "Hakeem",
    LastName: "Mensah",
    KYCstatus: "successful",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    OrganizationName: "Pentagon LLC",
    emailAddress: "example@gmail.com",
    FirstName: "Hakeem",
    LastName: "Mensah",
    KYCstatus: "successful",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    OrganizationName: "Cater & Care Foundation",
    emailAddress: "example@gmail.com",
    FirstName: "Hakeem",
    LastName: "Mensah",
    KYCstatus: "unsuccessful",
    date: "12 Dec, 2022",
    actions: "",
  },
  
];

const statusClasses = {
    successful: "bg-[#35C78A] text-gray-700",
  unsuccessful: "bg-[#FFFDED] text-[#F2994A]",
};

const OrganizationsTable = ({ setIsOpen, isOpen }: ProjectTableProps) => {
  const [listFilter, setListFilter] = useState<string | number>("10");
  const [listFilterBy, setListFilterBy] = useState<string | number>("today");
  const [openArchive, setOpenArchive] = useState<string | undefined | boolean>(
    undefined
  );
  const [openCampaign, setOpenCampaign] = useState<string | undefined>(
    undefined
  );
  const [openPause, setOpenPause] = useState<string | undefined>(undefined);
  const [isModalOpen, setModalOpen] = React.useState(false);


  const handleOpenModal = () => {
    // Switch to the "Pending Approval" tab
     setModalOpen(true); // Optionally open a modal if needed
   };
   
 
   const handleCloseModal = () => {
     setModalOpen(false);
   };




  return (
    <div className=" bg-white rounded-lg shadow-md">
      {isOpen === "cash" && (
        <CashProjectForm isOpen={isOpen} onClose={() => setIsOpen(undefined)} />
      )}
      {isOpen === "item" && (
        <ItemProjectForm isOpen={isOpen} onClose={() => setIsOpen(undefined)} />
      )}

      {openArchive && (
        <ArchiveProjectModal
          open={openArchive}
          project_name={openCampaign}
          onClose={() => {
            setOpenArchive(undefined);
          }}
        />
      )}

      {openCampaign && (
        <DeleteCampaignModal
          project_name={openCampaign}
          onClose={() => {
            setOpenCampaign(undefined);
          }}
        />
      )}

      {openPause && (
        <PauseProjectModal
          open={openPause}
          project_name={openPause}
          onClose={() => {
            setOpenPause(undefined);
          }}
        />
      )}
      {isModalOpen && (
        <LivenessCapture onClose={handleCloseModal} />
      )}
      <div className="px-4 flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold font-sans">Organizations</h2>
        <div>
          <label className="mr-2 text-sm font-medium">Filter by:</label>
          <Select
            className={""}
            size={"md"}
            variant={"outlined"}
            value={listFilterBy}
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
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Organization Name
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Email address
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              First Name
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Last Name
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              KYC Status
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]"></th>
           
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}
            onClick={handleOpenModal}
             className="cursor-pointer hover:bg-gray-100 "
            >
              
              <td className="px-4 b] py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F] ">
  
                {project.OrganizationName}
              
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.emailAddress}
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.FirstName}
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.LastName}
              </td>
              {/* <td className="px-4 py-6 mt-8 text-xs"> */}
                <span
                  className={`text-xs font-medium px-2 py-1 mt-8 rounded-lg ${
                    project.KYCstatus === "successful" ? `bg-[#D1F7C4]` : `black`
                  } ${statusClasses[project.KYCstatus]}`}
                >
                  {project.KYCstatus}
                </span>
              {/* </td> */}

 <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
              <button className="p-2"
              
              
              >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 text-[#25396F]">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 5.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12a.75.75 0 100-1.5.75.75 0 000 1.5zM12 18.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        />
      </svg>
    </button>
      </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-4 flex justify-between items-center mt-4">
        <div>
          <label className="mr-2 text-sm font-medium">Items</label>
          <Select
            size={"sm"}
            placeholder={"10"}
            variant={"outlined"}
            value={listFilter}
            onChange={(e) => {
              setListFilter(e);
            }}
            options={[
              { value: "10", label: "10" },
              { value: "20", label: "20" },
              {
                value: "30",
                label: "30",
              },
              { value: "40", label: "40" },
              { value: "50", label: "50" },
            ]}
          />
        </div>
        <div className={"flex items-center gap-4"}>
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
}

export default OrganizationsTable;

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

interface ProjectTableProps {
  setIsOpen: React.Dispatch<React.SetStateAction<"item" | "cash" | undefined>>;
  isOpen?: "item" | "cash" | undefined;
}

type Project = {
  name: string;
  emailAddress: string;
  disbursed: string;
  beneficiaries: string;
  date: string;
  status: "Active" | "Inactive";
  actions: string;
};

const projects: Project[] = [
  {
    name: "Blue Orange Foundation",
    emailAddress: "example@gmail.com",
    disbursed: "$10,050,000",
    beneficiaries: "$82,000",
    status: "Active",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    name: "Pentagon LLC",
    emailAddress: "example@gmail.com",
    disbursed: "$10,050,000",
    beneficiaries: "82,000",
    status: "Active",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    name: "Cater & Care Foundation",
    emailAddress: "example@gmail.com",
    disbursed: "$10,050,000",
    beneficiaries: "82,000",
    status: "Inactive",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    name: "Foundational Black Americans",
    emailAddress: "example@gmail.com",
    disbursed: "$10,050,000",
    beneficiaries: "82,000",
    status: "Active",
    date: "12 Dec, 2022",
    actions: "",
  },
  {
    name: "John Doe & Co",
    emailAddress: "example@gmail.com",
    disbursed: "$10,050,000",
    beneficiaries: "82,000",
    status: "Active",
    date: "12 Dec, 2022",
    actions: "",
  },
];

const statusClasses = {
  Active: "bg-green-[#D1F7C4] text-green-700",
  Inactive: "bg-gray-100 text-gray-700",
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

      <div className="px-4 flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold font-sans">Organizations</h2>
        <div>
          <label className="mr-2 text-sm font-medium">Filter by:</label>
          <Select
            className={"border-none"}
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

      <table className="w-full text-left text-[16px] font-medium pt-4 border-collapse font-sans text-[#25396F]">
        <thead className={"bg-[#F7F7F7] h-[59px] shadow-none border-none"}>
          <tr className="bg-[#F7F7F7] shadow-none border-none ">
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Name
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Email address
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Disbursed
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Beneficiaries
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Status
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]">
              Actions
            </th>
            <th className="px-4 py-2 font-medium text-xs lg:text-[16px] font-sans text-[#25396F]"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className="px-4 b] py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F] ">
                {project.name}
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.emailAddress}
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.disbursed}
              </td>
              <td className="px-4 py-6 mt-8 font-normal text-xs lg:text-[16px] font-sans text-[#25396F]">
                {project.beneficiaries}
              </td>
              <td className="px-4 py-6 mt-8 text-xs">
                <span
                  className={`text-xs font-medium px-2 py-1 mt-8 rounded-lg ${
                    project.status === "Active" ? `bg-[#D1F7C4]` : `black`
                  } ${statusClasses[project.status]}`}
                >
                  {project.status}
                </span>
              </td>
              <td className="px-4 py-6 mt-8 h-10 w-10 text-xs">
                <Button>
                  <div className="border border-[#707FA3] rounded py-[8px] px-[12px]">
                    <ArrowDownIcon height="20" width="20" fill="#17CE89" />
                  </div>
                </Button>
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
};

export default OrganizationsTable;

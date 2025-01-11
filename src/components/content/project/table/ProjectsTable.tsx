import React, { useState } from "react";
import Table, { TableColumn } from "./TableData";
import CashProjectForm from "@/components/modal/project/CashProjectForm";
import ItemProjectForm from "@/components/modal/project/ItemProjectForm";
import ArchiveProjectModal from "@/components/modal/project/ArchiveProjectModal";
import DeleteCampaignModal from "@/components/modal/project/DeleteCampaign";
import PauseProjectModal from "@/components/modal/project/PauseProjectMoadal";
import Select from "@/components/select";

const statusClasses = {
  Ongoing: "bg-blue-100 text-blue-700",
  Ended: "bg-[#FAE8EE] text-[#E42C66]",
  Active: "bg-green-100 text-green-700",
  Pause: "bg-yellow-100 text-yellow-700",
};

type Project = {
  name: string;
  totalFunded: string;
  amountDisbursed: string;
  amountSpent: string;
  date: string;
  status: "Ongoing" | "Ended" | "Active" | "Pause";
};

const projects: Project[] = [{
    name: "Feed the Poor",
    totalFunded: "$10,050,000",
    amountDisbursed: "$10,050,000",
    amountSpent: "$10,050,000",
    date: "12 Dec, 2022",
    status: "Ongoing"
}, {
    name: "Feed the Poor",
    totalFunded: "$150,000",
    amountDisbursed: "$150,000",
    amountSpent: "$150,000",
    date: "12 Dec, 2022",
    status: "Ended"
}, {
    name: "Feed the Poor",
    totalFunded: "$10,050,000",
    amountDisbursed: "$10,050,000",
    amountSpent: "$10,050,000",
    date: "12 Dec, 2022",
    status: "Active"
}, {
    name: "Feed the Poor",
    totalFunded: "$150,000",
    amountDisbursed: "$150,000",
    amountSpent: "$150,000",
    date: "12 Dec, 2022",
    status: "Ended"
}, {
    name: "Feed the Poor",
    totalFunded: "$10,050,000",
    amountDisbursed: "$10,050,000",
    amountSpent: "$10,050,000",
    date: "12 Dec, 2022",
    status: "Pause"
},];


const ProjectsTable = () => {
  const [listFilterBy, setListFilterBy] = useState<string | number>("today");
  const [isOpen, setIsOpen] = useState<string | undefined>();
  const [openArchive, setOpenArchive] = useState<string | undefined>();
  const [openCampaign, setOpenCampaign] = useState<string | undefined>();
  const [openPause, setOpenPause] = useState<string | undefined>();

  const columns: TableColumn<Project>[] = [
    { header: "Name", key: "name" as keyof Project },
    { header: "Total Funded", key: "totalFunded" as keyof Project },
    { header: "Amount Disbursed", key: "amountDisbursed" as keyof Project },
    { header: "Amount Spent", key: "amountSpent" as keyof Project },
    { header: "Date", key: "date" as keyof Project },
    {
      header: "Status",
      key: "status" as keyof Project,
      render: (project: Project) => (
        <span
          className={`text-xs font-medium px-2 py-1 mt-8 rounded-lg ${
            statusClasses[project.status]
          }`}
        >
          {project.status}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      {isOpen === "cash" && (
        <CashProjectForm
          isOpen={isOpen}
          onClose={() => setIsOpen(undefined)}
        />
      )}
      {isOpen === "item" && (
        <ItemProjectForm
          isOpen={isOpen}
          onClose={() => setIsOpen(undefined)}
        />
      )}
      {openArchive && (
        <ArchiveProjectModal
          open={openArchive}
          project_name={openCampaign}
          onClose={() => setOpenArchive(undefined)}
        />
      )}
      {openCampaign && (
        <DeleteCampaignModal
          project_name={openCampaign}
          onClose={() => setOpenCampaign(undefined)}
        />
      )}
      {openPause && (
        <PauseProjectModal
          open={openPause}
          project_name={openPause}
          onClose={() => setOpenPause(undefined)}
        />
      )}

      <div className="px-4 flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div>
          <label className="mr-2 text-sm font-medium">Filter by:</label>
          <Select
            className="border-none"
            size="md"
            variant="outlined"
            value={listFilterBy}
            onChange={(e) => setListFilterBy(e)}
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

      <Table data={projects} columns={columns} />
    </div>
  );
};

export default ProjectsTable;














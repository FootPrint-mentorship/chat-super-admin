
import React, {useState} from "react";
import CashProjectForm from "@/components/modal/project/CashProjectForm";
import Select from "@/components/select";
import ItemProjectForm from "@/components/modal/project/ItemProjectForm";
import ArchiveProjectModal from "@/components/modal/project/ArchiveProjectModal";
import DeleteCampaignModal from "@/components/modal/project/DeleteCampaign";
import PauseProjectModal from "@/components/modal/project/PauseProjectMoadal";
import Link from "next/link";
import ActionModal from "@/components/modal/project/ActionModal";

interface ProjectTableProps {
    setIsOpen: React.Dispatch<React.SetStateAction<"item" | "cash" | undefined>>;
    isOpen?: "item" | "cash" | undefined
}

type Project = {
    name: string;
    emailAddress: string; // New field for email address
    totalDonation: string; // New field for total donation
    ngosOrCampaigns: string;
    status: "Ongoing" | "Ended" | "Active" | "Pause";
    actions: string;
};

const projects: Project[] = [{
    name: "Hope Spring Initiative",
   emailAddress: "example@gmail.com",
    totalDonation: "$$10,050,000",
    ngosOrCampaigns: "3/9",
    status: "Ongoing",
    actions: ""
}, {
    name: "Jaime Fowler",
   emailAddress: "example@gmail.com",
    totalDonation: "$10,050,000",
    ngosOrCampaigns: "3/9",
    status: "Ongoing",
    actions: ""
}, {
    name: "Hope Spring Initiative",
    emailAddress: "example@gmail.com",
     totalDonation: "$10,050,000",
     ngosOrCampaigns: "3/9",
     status: "Ongoing",
     actions: ""
}, {
    name: "Johnny Walker Inc",
   emailAddress: "example@gmail.com",
    totalDonation: "$10,050,000",
    ngosOrCampaigns: "3/9",
    status: "Ongoing",
    actions: ""
},];

const statusClasses = {
    Ongoing: "bg-blue-100 text-blue-700",
    Ended: "bg-[#FAE8EE] text-[#E42C66]",
    Active: "bg-green-100 text-green-700",
    Pause: "bg-yellow-100 text-yellow-700",
};

const ProjectsTable = ({setIsOpen, isOpen}:ProjectTableProps) => {
    const [listFilter, setListFilter] = useState<string | number>('10')
    const [listFilterBy, setListFilterBy] = useState<string | number>('today')
    const [openArchive, setOpenArchive] = useState<string | undefined | boolean>(undefined);
    const [openCampaign, setOpenCampaign] = useState<string | undefined>(undefined);
    const [openPause, setOpenPause] = useState<string | undefined>(undefined);
    const [isModalOpen, setModalOpen] = React.useState(false);



    const handleOpenModal = () => {
        // Switch to the "Pending Approval" tab
         setModalOpen(true); // Optionally open a modal if needed
       };
       
     
       const handleCloseModal = () => {
         setModalOpen(false);
       };
   

    return (<div className=" bg-white rounded-lg shadow-md">
   

            <div className="px-4 flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Donor</h2>
                <div>
                    <label className="mr-2 text-sm font-medium">Filter by:</label>
                    <Select className={'border-none'} size={'md'} variant={'outlined'} value={listFilterBy} onChange={(e) => {
                        setListFilterBy(e)
                    }} options={[
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
                    ]}/>

                </div>
            </div>

            <table className="w-full text-left text-[16px] font-medium pt-4 border-collapse font-sans text-[#25396F]">
            <thead className={" h-[59px] shadow-none border-none w-full"}>
                <tr className="bg-[#F7F7F7] shadow-none border-none w-full ">
                    <th className="px-4 py-2 font-bold text-xs">Name</th>
                    <th className="px-12 py-2 font-bold text-xs">Email address</th>
                    <th className="px-3 py-2 font-bold text-xs">Total Donation</th>
                    <th className="px-4 py-2 font-bold text-xs">NGOs/Campaigns</th>
                    <th className="px-4 py-2 font-bold text-xs">Status</th>
                    <th className="px-4 py-2 font-bold text-xs">Actions</th>
                    <th className="px-4 py-2 font-bold text-xs"></th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project, index) => (<tr key={index}>
                        <td className="px-4 py-6 mt-8 text-xs ">{project.name}</td>
                        <td className="px-12 py-6 mt-8 text-xs">{project.emailAddress}</td>
                        <td className="px-3 py-6 mt-8 text-xs">{project.totalDonation}</td>
                        <td className="px-6 py-6 mt-8 text-xs">{project.ngosOrCampaigns}</td>
                        <span
                    className={`text-xs font-medium px-2 py-1 mt-8 rounded-lg ${statusClasses[project.status]}`}
                >
                  {project.status}
                </span>
                        <td className="px-8 py-6 mt-8 text-xs">{project.actions}
                        <button className="text-gray-800 hover:text-gray-700"
                         onClick={handleOpenModal}
                        >
    &#x22EE; 
  </button>
                
                        </td>
                        <td className="px-4 py-6 mt-8 text-xs">
                        </td>
                        <td className="flex justify-between items-center px-4 py-6">
                            <div className={'flex items-center gap-4'}>
                                {/* <svg onClick={()=> {
                                    setOpenArchive(project.name)
                                }}  className={'cursor-pointer'} width="16"
                                     height="16" viewBox="0 0 21 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.5883 4.41033L16.0891 1.91116C16.0119 1.83362 15.92 1.77213 15.8189 1.73023C15.7178 1.68833 15.6094 1.66683 15.5 1.66699H5.49996C5.39051 1.66683 5.2821 1.68833 5.18099 1.73023C5.07988 1.77213 4.98805 1.83362 4.91079 1.91116L2.41163 4.41033C2.33377 4.48756 2.27202 4.57948 2.22996 4.68076C2.1879 4.78204 2.16638 4.89066 2.16663 5.00033V15.8337C2.16663 16.7528 2.91413 17.5003 3.83329 17.5003H17.1666C18.0858 17.5003 18.8333 16.7528 18.8333 15.8337V5.00033C18.8335 4.89066 18.812 4.78204 18.77 4.68076C18.7279 4.57948 18.6662 4.48756 18.5883 4.41033ZM5.84496 3.33366H15.155L15.9883 4.16699H5.01163L5.84496 3.33366ZM3.83329 15.8337V5.83366H17.1666L17.1683 15.8337H3.83329Z"
                                        fill="#646A86"/>
                                    <path d="M12.1667 7.5H8.83337V10H6.33337L10.5 14.1667L14.6667 10H12.1667V7.5Z"
                                          fill="#646A86"/>
                                </svg>
                                <svg onClick={()=> {
                                    setOpenPause(project.name)
                                }} className={'cursor-pointer'} width="16" height="16" viewBox="0 0 17 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.47506 0.666992C3.87506 0.666992 0.141724 4.40033 0.141724 9.00033C0.141724 13.6003 3.87506 17.3337 8.47506 17.3337C13.0751 17.3337 16.8084 13.6003 16.8084 9.00033C16.8084 4.40033 13.0834 0.666992 8.47506 0.666992ZM7.43339 11.5253C7.43339 11.9253 7.26672 12.0837 6.84172 12.0837H5.75839C5.33339 12.0837 5.16672 11.9253 5.16672 11.5253V6.47533C5.16672 6.07533 5.33339 5.91699 5.75839 5.91699H6.83339C7.25839 5.91699 7.42506 6.07533 7.42506 6.47533V11.5253H7.43339ZM11.8334 11.5253C11.8334 11.9253 11.6667 12.0837 11.2417 12.0837H10.1667C9.74172 12.0837 9.57506 11.9253 9.57506 11.5253V6.47533C9.57506 6.07533 9.74172 5.91699 10.1667 5.91699H11.2417C11.6667 5.91699 11.8334 6.07533 11.8334 6.47533V11.5253Z"
                                        fill="#646A86"/>
                                </svg> */}
                            </div>
                            {/* 40:56 */}
                            <Link href={`/projects/${project.name}`}>
                                {/* <button className="text-[#17CE89] text-xs underline font-bold hover:underline">
                                    View
                                </button> */}
                            </Link>
                        </td>
                </tr>))}
                </tbody>
            </table>
            {isModalOpen && (
      <ActionModal onClose={handleCloseModal} />
    )}
        <div className="px-4 py-4 flex justify-between items-center mt-4">
                <div>
                    <label className="mr-2 text-sm font-medium">Items</label>
                    <Select size={'sm'} placeholder={'10'}
                            variant={'outlined'}
                            value={listFilter} onChange={(e) => {
                        setListFilter(e)
                    }}
                            options={[{value: '10', label: "10"}, {value: '20', label: "20"}, {
                                value: '30',
                                label: "30"
                            }, {value: '40', label: "40"}, {value: '50', label: "50"}]}/>

                </div>
                <div className={'flex items-center gap-4'}>
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
                            fill="#707FA3"/>
                    </svg>

                    <span className="text-sm">Showing 1 - 5 of 24</span>

                    <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
                            fill="#707FA3"/>
                    </svg>

                </div>
            </div>
        </div>
     
    );
    
};

export default ProjectsTable;
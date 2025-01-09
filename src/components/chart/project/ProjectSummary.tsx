import React from 'react';
import {projectSummaryMock} from "@/util/mockdata/notification";
import Button from "@/components/button/Button";
import ProjectVendorCard from "@/components/chart/project/ProjectVendorCard";
import ProjectSummaryPopOver from "@/components/content/project/ProjectSummaryPopOver";
import SetCriteria from "@/components/modal/project/SetCriteria";
import ExtendProject from "@/components/modal/project/ExtendProject";
import PauseProjectMoadal from "@/components/modal/project/PauseProjectMoadal";
import {useRouter} from "next/router";
import ArchiveProjectModal from "@/components/modal/project/ArchiveProjectModal";

function ProjectSummary({setOpenHistory}:{setOpenHistory:React.Dispatch<React.SetStateAction<boolean>>}) {
    const [open, setOpen] = React.useState(false);
    const [openCriteria, setOpenCriteria] = React.useState(false);
    const [openExtendProject, setExtendProject] = React.useState(false);
    const [openEditProject, setEditProject] = React.useState(false);
    const [openPauseProject, setPauseProject] = React.useState(false);
    const [openArchiveProject, setOpenArchiveProject] = React.useState(false);
    const {query} = useRouter()
    return (
        <div style={{flex: 1}} className="flex flex-col gap-6 mb-6">
            <SetCriteria  isOpen={openCriteria} onClose={()=>{
                setOpenCriteria(!openCriteria);
            }}/>

            <ExtendProject isOpen={openExtendProject} onClose={()=>{
                setExtendProject(!openExtendProject);
            }} />

            <PauseProjectMoadal open={openPauseProject} onClose={()=>{
                setPauseProject(!openPauseProject);
            }} project_name={query?.id as string}/>

            <ArchiveProjectModal open={openArchiveProject} onClose={()=>{
                setOpenArchiveProject(!openArchiveProject);
            }}/>

            <div className={'shadow-md rounded-md p-4 flex flex-col gap-6'}>
                <h4 className="text-sm text-primary font-bold mb-2">Project Summary</h4>
                <div className="w-full bg-gray-50 p-4 rounded-lg border border-[#53DB92] ">

                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-sm text-gray-700">Feed the Poor</h4>
                        <ProjectSummaryPopOver open={open} setOpen={setOpen} openArchiveProject={openArchiveProject} openCriteria={openCriteria} openEditProject={openEditProject} openExtendProject={openExtendProject} openPauseProject={openPauseProject} setEditProject={setEditProject} setExtendProject={setExtendProject} setOpenArchiveProject={setOpenArchiveProject} setPauseProject={setPauseProject} setOpenCriteria={setOpenCriteria} />


                    </div>
                    <div className="flex flex-col gap-4 text-xs text-gray-500 mt-2 w-full">
                        {
                            projectSummaryMock.map((item) => (
                                <div key={item.name}
                                     className={'flex justify-between items-center w-full'}>
                                    <p className={'text-[10px]'}>{item.name}:</p>
                                    <p className={'text-[10px]'}>{item.value}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <p onClick={() => {
                    setOpenHistory(true)
                }} className="text-xs cursor-pointer font-bold flex items-center gap-2 text-[#53DB92] mb-2">Project
                    Version
                    History <svg height="12"
                                 viewBox="0 0 20 16"
                                 width="12"
                                 xmlns="http://www.w3.org/2000/svg">
                        <path d="m13 5 8 7-8 7m8-7h-17.99502058" fill="none" stroke="#53DB92"
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              transform="translate(-2 -4)"/>
                    </svg></p>

                <div className="bg-white p-4 rounded-lg border border-[#53DB92]">

                    <div className="flex items-center justify-between w-full">
                        <p className={'text-[10px]'}>Amount Unspent: </p>
                        <p className={'text-[10px]'}>NGN 800,000.00</p>
                    </div>
                    <div className="mt-4 w-full">
                        <Button text={'Withdraw Funds'}
                                variant={'outlined'}
                                size={'sm'}
                                className="border-secondaryBgColor text-secondaryBgColor text-xs w-full"/>
                    </div>
                </div>
            </div>

            <ProjectVendorCard/>

            <div className="w-full bg-gray-50 p-6 rounded-lg shadow-lg flex items-center gap-2">
                <svg width="66" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="15" fill="#2F80ED"/>
                    <path
                        d="M41.3602 34.427L37.1868 24.667C36.4268 22.8804 35.2935 21.867 34.0002 21.8004C32.7202 21.7337 31.4802 22.627 30.5335 24.3337L28.0002 28.8804C27.4668 29.8404 26.7068 30.4137 25.8802 30.4804C25.0402 30.5604 24.2002 30.1204 23.5202 29.2537L23.2268 28.8804C22.2802 27.6937 21.1068 27.1204 19.9068 27.2404C18.7069 27.3604 17.6802 28.187 17.0002 29.5337L14.6935 34.1337C13.8669 35.8004 13.9469 37.7337 14.9202 39.307C15.8935 40.8804 17.5868 41.827 19.4402 41.827H36.4535C38.2402 41.827 39.9068 40.9337 40.8935 39.4404C41.9068 37.947 42.0668 36.067 41.3602 34.427Z"
                        fill="white"/>
                    <path
                        d="M21.2938 23.1735C23.7827 23.1735 25.8004 21.1558 25.8004 18.6668C25.8004 16.1779 23.7827 14.1602 21.2938 14.1602C18.8048 14.1602 16.7871 16.1779 16.7871 18.6668C16.7871 21.1558 18.8048 23.1735 21.2938 23.1735Z"
                        fill="white"/>
                </svg>

                <div className={'flex flex-col gap-1'}>
                    <h4 className={'text-sm text-[#333333] font-bold'}>View Project Media</h4>
                    <p className={'text-xs text-[#555555]'}>Click here to view project images and videos on Google Drive
                        folder.</p>
                </div>

            </div>

        </div>
    );
}

export default ProjectSummary;
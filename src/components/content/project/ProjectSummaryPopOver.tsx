import React from 'react';
import {Popover} from "flowbite-react";

interface Props {
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    setOpenCriteria:React.Dispatch<React.SetStateAction<boolean>>,
    setExtendProject:React.Dispatch<React.SetStateAction<boolean>>,
    setEditProject:React.Dispatch<React.SetStateAction<boolean>>,
    setPauseProject:React.Dispatch<React.SetStateAction<boolean>>,
    setOpenArchiveProject:React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
    openCriteria: boolean
    openExtendProject: boolean
    openEditProject: boolean
    openPauseProject: boolean
    openArchiveProject: boolean
}

function ProjectSummaryPopOver({open,setOpen, openArchiveProject, openEditProject, openExtendProject, openPauseProject, setEditProject, setExtendProject, openCriteria, setPauseProject, setOpenCriteria, setOpenArchiveProject}: Props) {
    const items = [
        {
            name: "Edit Project",
            function: () =>{
                setEditProject(!openEditProject)
            }
        },

        {
            name: "Extend Project",
            function: () =>{
                setExtendProject(!openExtendProject)
            }
        },

        {
            name: "Set Criteria",
            function: () =>{
                setOpenCriteria(!openCriteria)
            }
        },

        {
            name: "Pause Project",
            function: () =>{
                setPauseProject(!openPauseProject)
            }
        },

        {
            name: "Archive Project",
            function: () =>{
                setOpenArchiveProject(!openArchiveProject)
            }
        },
    ]


    return (
        <Popover className={'border-none'}
                 placement={'left-start'}
                 trigger="click"
                 content={
                     <div className={'bg-white py-2 pb-4 rounded-lg shadow-md w-full flex flex-col gap-4 px-4 border-none border-0'}>
                         {items.map((item, index) => (
                             <p key={index} onClick={item.function} className={'text-lg cursor-pointer text-primary py-2 border border-b-[#F5F8FA]'}>{item.name}</p>
                         ))}

                     </div>
                 }
                 open={open}
        >
            <svg

                onClick={() => {
                    setOpen(!open)
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots-vertical cursor-pointer" width="15"
                height="15"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="19" r="1"/>
                <circle cx="12" cy="5" r="1"/>
            </svg>
        </Popover>
    );
}

export default ProjectSummaryPopOver;
import React, {useState} from 'react';
import SeekDonation from "@/components/modal/project/SeekDonation";
import MakeProjectPublicModal from "@/components/modal/project/MakeProjectPublicModal";
import InviteDonorModal from "@/components/modal/project/InviteDonorModal";

function ProjectLinks({}) {

    const [open, setOpen] = useState<string | undefined | boolean>(undefined)
    const [openMakePublic, setMakePublic] = useState<string | undefined | boolean>(undefined)
    const [openInviteDonor, setOpenInviteDonor] = useState<string | undefined | boolean>(undefined)

    return (
        <div className="mb-6 flex w-full  lg:w-fit flex-row justify-between lg:justify-normal border-2 border-secondaryBgColor rounded-lg px-2 gap-4 items-center">

            <SeekDonation isOpen={open} onClose={() => {
                setOpen(undefined)
            }}/>

            <MakeProjectPublicModal
                isOpen={openMakePublic}
            onClose={() => {
                setMakePublic(undefined)
            }}
            />

            <InviteDonorModal

            isOpen={openInviteDonor}
            onClose={() => {
                setOpenInviteDonor(undefined)
            }}/>

            <div className="flex w-full lg:w-auto justify-center lg:justify-auto items-center gap-2 py-2 border-r-2 border-secondaryBgColor border-r-solid ">
                <p className={'flex items-center justify-center gap-1 italic text-xs font-bold'}>
                    <svg width={'15px'} height={'15px'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="#17CE89" opacity="0"/>
                        <g fill="#17CE89">
                            <path
                                d="m13.29 9.29-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 -1.42-1.42z"/>
                            <path
                                d="m12.28 17.4-1.28 1.27a4.2 4.2 0 0 1 -5.58.4 4 4 0 0 1 -.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0 -1.42 0l-1.27 1.28a6.15 6.15 0 0 0 -.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0 -1.42-1.42z"/>
                            <path
                                d="m19.66 3.22a6.18 6.18 0 0 0 -8.13.68l-1.08 1.1a1.09 1.09 0 0 0 -.17 1.61 1 1 0 0 0 1.42 0l1.3-1.31a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0 -.6-9.06z"/>
                        </g>
                    </svg>
                    <span className={'hidden lg:inline-block'}>Project link:</span>
                </p>
                <a href="https://chats.cash/organization"
                   className="text-blue-500 text-sm hidden lg:inline-block">https://chats.cash/organization</a>
            </div>
            <p  className="text-sm hidden w-full lg:w-auto lg:flex text-[#25396F]  items-center gap-2 py-2 pr-2 border-r-2 border-secondaryBgColor border-r-solid">Seek
                Donation
                <label className="inline-flex items-center cursor-pointer">
                    <input onChange={(e)=>{
                        console.log(e)
                        setOpen(e.target.checked)
                    }} type="checkbox" value="" className="sr-only peer"/>
                    <span
                        className="relative w-9 h-5 bg-primaryTextColor peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondaryBgColor"></span>

                </label>
            </p>
            <p className="text-sm w-full lg:w-auto lg:auto text-[#25396F] flex items-center justify-center gap-2 py-2 px-2 border-r-2 border-secondaryBgColor border-r-solid">
                 <span className={'hidden lg:inline-block'}>Make public</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input onChange={(e)=>{
                        console.log(e)
                        setMakePublic(e.target.checked)
                    }} type="checkbox" value="" className="sr-only peer"/>
                    <span
                        className="relative w-9 h-5 bg-primaryTextColor peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondaryBgColor"></span>

                </label>

            </p>
            <p className="text-sm w-full lg:w-auto justify-center lg:auto text-[#25396F] flex items-center gap-2 py-2 px-2 ">
                Invite donor
                <label className="hidden lg:inline-flex items-center cursor-pointer">
                    <input onChange={(e)=>{
                        console.log(e)
                        setOpenInviteDonor(e.target.checked)
                    }} type="checkbox" value="" className="sr-only peer"/>
                    <span
                        className="relative w-9 h-5 bg-primaryTextColor peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondaryBgColor"></span>

                </label>
            </p>
        </div>

    );
}

export default ProjectLinks;
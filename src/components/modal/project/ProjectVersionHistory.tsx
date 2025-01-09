import React from 'react';
import Button from "@/components/button/Button";
import EyeIcon from "@/components/icon/EyeIcon";

function ProjectVersionHistory({isOpen, onClose}: { isOpen: string | undefined | boolean, onClose: () => void }) {
    if (!isOpen) {
        return
    }

    return (<div className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black bg-opacity-80 z-50">
        <div className="flex flex-col gap-8 bg-white px-8 py-2 pb-4 rounded-lg shadow-md w-full max-w-lg">
            <div className={'flex items-center justify-between w-full px-2'}>
                <h2 className="text-xl font-semibold text-center">Projects - Vaccine for all</h2>
                <svg onClick={onClose} className={'w-[20px] h-[20px] cursor-pointer'} viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                    <path
                        d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                        fill="#231f20"/>
                </svg>
            </div>


            <ol className="relative h-[500px] overflow-x-hidden text-gray-500 border-s border-[#E1E7EC]">
                <li className="mb-10 ms-6 ">
        <span
            className="absolute flex items-center justify-center w-1 h-1 bg-black rounded-full -start-0.5 ring-2 ring-black">
        </span>
                    <div className={'flex flex-col gap-4'}>

                        <h3 className="font-medium leading-tight">March 17, 2023</h3>
                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#3DA35D] w-3 h-3 rounded'}/> Project extended</h4>

                        <p className="text-sm text-[#6D7786]">Extension period: 31 days, New End Date: Apr 27, 2023</p>

                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#96E072] w-3 h-3 rounded'}/>Additional budget Added
                        </h4>
                        <p className="text-sm text-[#6D7786]">Amount: NGN200,000</p>
                        <p className="text-sm text-[#2A2E33] flex items-center gap-2"><span
                            className={'bg-[#E8FCCF] w-3 h-3 rounded'}/>(4) Beneficiaries Added</p>

                    </div>
                </li>
                <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-1 h-1 bg-black rounded-full -start-0.5 ring-2 ring-black">
        </span>
                    <div className={'flex flex-col gap-4'}>

                        <h3 className="font-medium leading-tight">January 5, 2023</h3>
                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#3DA35D] w-3 h-3 rounded'}/> Project extended</h4>

                        <p className="text-sm text-[#6D7786]">Extension period: 31 days, New End Date: Apr 27, 2023</p>

                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#96E072] w-3 h-3 rounded'}/>Additional budget Added
                        </h4>
                        <p className="text-sm text-[#6D7786]">Amount: NGN200,000</p>
                        <p className="text-sm text-[#2A2E33] flex items-center gap-2"><span
                            className={'bg-[#E8FCCF] w-3 h-3 rounded'}/>(4) Beneficiaries Added</p>

                    </div>
                </li>

                <li className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-1 h-1 bg-black rounded-full -start-0.5 ring-2 ring-black">
        </span>
                    <div className={'flex flex-col gap-4'}>

                        <h3 className="font-medium leading-tight">September 25, 2022</h3>
                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#3DA35D] w-3 h-3 rounded'}/> Project extended</h4>

                        <p className="text-sm text-[#6D7786]">Extension period: 31 days, New End Date: Apr 27, 2023</p>

                        <h4 className="text-sm flex items-center gap-2"><span
                            className={'bg-[#96E072] w-3 h-3 rounded'}/>Additional budget Added
                        </h4>
                        <p className="text-sm text-[#6D7786]">Amount: NGN200,000</p>
                        <p className="text-sm text-[#2A2E33] flex items-center gap-2"><span
                            className={'bg-[#E8FCCF] w-3 h-3 rounded'}/>(4) Beneficiaries Added</p>

                    </div>
                </li>
            </ol>

             <Button  text={'Show More'} icon={<EyeIcon/>} variant={'text'}  className={'border-none w-fit text-secondaryBgColor hover:bg-inherit flex bg-inherit underline'} />
        </div>
    </div>);
}

export default ProjectVersionHistory;
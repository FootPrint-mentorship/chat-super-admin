import React from 'react';
import Button from "@/components/button/Button";

function DonorList({setOpenDonorList, openDonorList}:{setOpenDonorList: React.Dispatch<React.SetStateAction<boolean>>, openDonorList: boolean}) {

    return (
            <div className="w-full bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col mb-4 gap-2">
                    <p className="text-sm font-bold text-primary">Donors list</p>
                    <p className="font-semibold text-xs text-primary">$0 <span className={'font-normal'}>raised from</span> $500,000 </p>
                    <div className="w-full bg-divider rounded-full h-2.5">
                        <div className="bg-secondaryBgColor h-2.5 rounded-full" style={{width: "45%"}}></div>
                    </div>
                    <p className=" text-xs text-primary flex justify-between font-normal items-center w-full">2345
                        Donors <span className={'font-normal rounded-full p-2 text-xs bg-divider'}>12 days left</span></p>

                </div>

                <div className={'flex justify-end items-center w-full'}>
                    <Button
                        onClick={() => {
                            setOpenDonorList(true)
                        }}
                        text={'View Donors'}
                        size={'sm'}
                        variant={'outlined'}
                        className={'border-secondaryBgColor text-secondaryBgColor'}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" height="15"
                                   viewBox="0 0 24 24" width="15">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M21 2H3v18h6l3 3 3-3h6V2zm-9 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"
                                fill={'#17CE89'}/>
                        </svg>}

                    />

                </div>
            </div>
    );
}

export default DonorList;
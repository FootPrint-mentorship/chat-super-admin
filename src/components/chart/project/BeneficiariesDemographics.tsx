import React, {useState} from 'react';
import Button from "@/components/button/Button";
import Select from "@/components/select";
import {GenderChart} from "@/components/chart/project/GenderChart";
import DonorList from "@/components/chart/project/DonorList";
import Link from "next/link";
import {useRouter} from "next/router";

function BeneficiariesDemographics({setOpenDonorList, openDonorList}:{setOpenDonorList: React.Dispatch<React.SetStateAction<boolean>>, openDonorList: boolean}) {
    const {query} = useRouter()

    const [filterYear, setFilterYear] = useState<string | number>('')

    return (
        <div className="hidden lg:grid grid-cols-1 mt-6 gap-6 mb-6 w-full">
            <div className={'flex gap-4  w-full'}>
                <div className=" w-full bg-gray-50 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col mb-4">
                        <p className="text-sm font-bold text-primary">Total Beneficiaries</p>
                        <p className="font-semibold text-3xl text-primary">2,000</p>
                    </div>

                    <div className={'flex justify-end items-center w-full'}>
                        <Link href={`/projects/${query.id}/project-beneficiaries`}>
                            <Button

                                text={'View Beneficiaries'}
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
                        </Link>

                    </div>
                </div>
                <DonorList openDonorList={openDonorList} setOpenDonorList={setOpenDonorList}/>
            </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <div className={'flex justify-between items-center w-full'}>
                        <h4 className="text-lg text-primary font-bold mb-2">Demographics</h4>
                        <div className={'flex items-center gap-2'}>
                            <Select className={'border-none rounded-lg'} size={'sm'} variant={'outlined'}
                                    value={filterYear} onChange={(e) => {
                                setFilterYear(e)
                            }} options={[
                                {
                                    value: "24 Hours",
                                    label: "24 Hours",
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


                            <div className={'py-[0.35rem] px-4 border border-primaryTextColor rounded'}>
                                <p>Gender: Male and Female</p>
                            </div>

                        </div>


                    </div>
                    <GenderChart/>
                </div>
            </div>
            );
            }

            export default BeneficiariesDemographics;
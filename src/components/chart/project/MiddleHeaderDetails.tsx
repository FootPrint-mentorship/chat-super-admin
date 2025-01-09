import React, {useState} from 'react';
import Input from "@/components/input";
import Button from "@/components/button/Button";
import FundingMethodModal from "@/components/modal/project/FundProject/FundingMethodModal";
import FundingConfirmation from "@/components/modal/project/FundProject/FundingConfirmation";
import LoadingFunding from "@/components/modal/project/FundProject/LoadingFunding";
import InsufficientFunds from "@/components/modal/project/FundProject/InsufficientFunds";
import Link from "next/link";
import {useRouter} from "next/router";

function MiddleHeaderDetails({search, setSearch,setOpenSmsToken, openSmsToken}:{openSmsToken: boolean, setOpenSmsToken: React.Dispatch<React.SetStateAction<boolean>>,  setSearch: React.Dispatch<React.SetStateAction<string>>, search: string}) {
const {query} = useRouter()
    const [open, setOpen] = useState<string | undefined | boolean>(undefined)
    const [confirm, setConfirm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [insufficientFunds, setInsufficientFunds] = useState<boolean>(false)

    return (
        <div className="mb-4 mt-8 flex flex-col lg:flex-row items-center justify-between w-full gap-8">

            <FundingMethodModal
                setConfirm={setConfirm}
                isOpen={open}
                onClose={() => setOpen(undefined)}

            />

            <FundingConfirmation
                setLoading={setLoading}
                isOpen={confirm}
                onClose={() => setConfirm(false)}

            />

            <LoadingFunding
                isOpen={loading}
                onClose={() => setLoading(false)}

            />


            <InsufficientFunds
                isOpen={insufficientFunds}
                onClose={() => setInsufficientFunds(false)}

            />




            <Input className={'border-[#707FA3] rounded-lg w-full lg:w-auto'} icon={<svg fill="none" height="16"
                                                                        viewBox="0 0 24 24" width="16"
                                                                        xmlns="http://www.w3.org/2000/svg">
                <g fill="#707FA3">
                    <path
                        d="m11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25s4.6-10.25 10.25-10.25 10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75z"/>
                    <path
                        d="m22.0004 22.7499c-.19 0-.38-.07-.53-.22l-2-2c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
                </g>
            </svg>} placeholder={'Search beneficiaries...'} value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
            <div className={'flex items-center flex-row md:flex-col lg:justify-end lg:flex-row gap-4 w-full lg:w-fit'}>
                <button onClick={()=>{
                    setOpenSmsToken(!openSmsToken)
                }} className="text-sm hidden lg:inline-block text-secondaryBgColor underline hover:underline">View / Manage
                    SMS Token & QR Codes
                </button>

                <Link href={`/projects/${query.id}/disburse-funds`}>
                    <Button
                        text={'Disburse Fund'} variant={'outlined'} size={'md'}
                        className={'rounded-lg w-full lg:w-auto border-none hover:bg-primaryTextColor bg-primaryTextColor text-white'}/>
                </Link>


                 <Button onClick={()=>{
                    setOpen(true)
                }}
                    text={'Fund Project'} variant={'contained'} size={'md'} color={'success'}
                    className={'rounded-lg w-full lg:w-auto'}/>
            </div>

        </div>
    );
}

export default MiddleHeaderDetails;
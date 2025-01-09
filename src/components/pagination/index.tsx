import React from "react";
import Select from "@/components/select";

interface PaginationProps {
    setListFilter?: any;
    listFilter?: any;
    filter?: boolean
}

export const Pagination = ({listFilter, setListFilter, filter = false}: PaginationProps) => {
    return (
        <div className={`p-4 flex ${filter ? "justify-between" : "justify-end"} items-center gap-2 text-sm`}>
            {filter && <div>
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

            </div>}

            <div className="p-4 flex justify-end items-center gap-2 text-sm">
                <span>Showing 1 - 10 of 24</span>
                <div className={'flex items-center gap-4'}>
                           <span
                               className={`inline-flex h-6 w-6 items-center justify-center rounded-full p-2 bg-[#F5F6F8]`}>
                                <svg width="7" height="13" viewBox="0 0 7 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
                                    fill="#707FA3"/>
                            </svg>


                           </span>
                    <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full p-2 bg-[#F5F6F8]`}>
                                <svg width="6" height="13" viewBox="0 0 6 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
                                    fill="#707FA3"/>
                            </svg>
                           </span>

                </div>
            </div>
            </div>
            )
            }


export const PaginationTwo = ({listFilter, setListFilter, filter = false}: PaginationProps) => {
    return (
        <div className={`p-4 flex ${filter ? "justify-between" : "justify-end"} items-center gap-4 text-sm`}>
            {filter && <div>
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

            </div>}

            <div className="p-4 flex justify-end items-center gap-2 text-sm">
                 <span
                     className={`inline-flex h-6 w-6 items-center justify-center rounded-full p-2 bg-[#F5F6F8]`}>
                                <svg width="7" height="13" viewBox="0 0 7 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
                                    fill="#707FA3"/>
                            </svg>


                           </span>
                <span>Showing 1 - 10 of 24</span>

                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full p-2 bg-[#F5F6F8]`}>
                                <svg width="6" height="13" viewBox="0 0 6 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
                                    fill="#707FA3"/>
                            </svg>
                           </span>

            </div>
        </div>
    )
}
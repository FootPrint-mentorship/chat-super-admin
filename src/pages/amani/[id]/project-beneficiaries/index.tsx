import React, {ReactNode, useRef, useState} from 'react';
import Back from "@/components/common/Back";
import Input from "@/components/input";
import Button from "@/components/button/Button";
import Filter from "@/components/icon/Filter";
import SearchIcon from "@/components/icon/SearchIcon";
import Select from "@/components/select";
import Tabs from "@/components/content/project/table/Tabs";
import CloudDownload from "@/components/icon/CloudDownload";
import Table from "@/components/common/Table";
import DashboardLayout from "@/components/layout/dashboardLayout";
import ExcelWhite from "@/components/icon/ExcelWhite";
import {useRouter} from "next/router";
import HDot from "@/components/icon/HDot";
import {Authenticated} from "@/lib/auth/withAuth"
import Popover from "@/components/common/Popover";


function Beneficiaries({}) {
    const [search, setSearch] = React.useState("");
    const [listFilter, setListFilter] = useState<string | number>('today')
    const [activeTab, setActiveTab] = useState<number>(1)
    const [selected, setSelected] = useState<any>([])

    const router = useRouter()

    const [showPopover, setShowPopover] = useState<boolean>(false);
    const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(null);
    const popoverButtonRef = useRef<HTMLButtonElement>(null);
    const [rowSelected, setRowSelected] = React.useState<null | any>(null);

    const actions = ["View", "Preview", "Unapproved"];

    const handlePopoverToggle = () => {
        if (popoverButtonRef.current) {
            const { top, left, height } = popoverButtonRef.current.getBoundingClientRect();
            setPopoverPosition({ top: top + height, left: left });
        }
        setShowPopover((prev) => !prev);
    };

    const handleActionClick = (action: string) => {

        if (action === "View") {
            router.push(`/projects/${query.id}/project-beneficiaries/${rowSelected?.id}/`);
        }

        if (action === "Preview") {
            router.push(`/projects/${query.id}/project-beneficiaries/${rowSelected?.id}`);
        }

        if (action === "Unapproved") {
            router.push(`/projects/${query.id}/project-beneficiaries/${rowSelected?.id}`);
        }

        setShowPopover(false);
    };



    const renderActions = (row: any) => (
        <div className="flex items-center gap-2" onClick={() => {
            console.log(row)
            setRowSelected(row)
        }}>
            <div onClick={handlePopoverToggle}>
                <HDot/>
            </div>

            <div
                style={{ top: `0px`, right: `150px` }}
                className={`relative ${showPopover && rowSelected?.id === row?.id  ? 'inline-block' : "hidden"} `}
            >
                <Popover actions={actions} onActionClick={handleActionClick}/>
            </div>
        </div>
    );


    const {query} = useRouter()

    console.log(query)

    const handleRowSelect = (selectedRows: any[]) => {
        console.log("Selected rows:", selectedRows);
        setSelected(selectedRows)
    };

    return (
        <DashboardLayout title={''}>
            <div className={''}>
                <div className={'flex items-center justify-start w-full'}>
                    <Back link={`/projects/${query.id}`}/>
                </div>

                <div className={'flex gap-2 w-[50%] mt-4'}>
                    <Input className={'border-[#707FA3] rounded-lg'} icon={<SearchIcon/>} placeholder={'Search...'}
                           value={search} onChange={(e) => {
                        setSearch(e.target.value)
                    }}/>

                    <Button size={"md"} text={"Filter"} variant={'outlined'} color={'secondary'}
                            className={'rounded-lg  hover:bg-white'}
                            icon={<Filter/>}
                    />
                </div>

                <div className="flex justify-between items-center w-full mt-8">
                    <h3 className="text-lg font-semibold text-primary mb-4 px-6 py-1">Project Beneficiaries</h3>
                    <div>
                        <label className="mr-2 text-sm font-medium">Filter By:</label>
                        <Select size={'sm'} placeholder={'10'}
                                variant={'outlined'}
                                border={'border-none'}
                                className={'border-none'}
                                value={listFilter} onChange={(e) => {
                            setListFilter(e)
                        }}
                                options={[
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

                <div className={'px-6 py-1 flex items-center justify-between w-full'}>
                    <Tabs setActiveTab={setActiveTab} activeTab={activeTab}
                          tabItems={[{name: "Approved", value: 1}, {name: "Pending", value: 2}, {
                              name: "Rejected",
                              value: 2
                          }]}/>
                    {selected?.length === 0 && <div className={'flex justify-end gap-2 pr-4'}>
                        <Button
                            onClick={() => {
                            }}
                            size={'sm'}
                            icon={<CloudDownload/>}
                            text={'Import beneficiaries'}
                            variant={'outlined'}
                            color={'success'}
                            className={'rounded'}/>

                        <Button
                            onClick={() => {
                            }}
                            size={'sm'}
                            icon={<ExcelWhite/>}
                            text={'Export'}
                            variant={'contained'}
                            color={'success'}
                            className={'rounded'}/>
                    </div>}
                    {selected?.length >= 1 &&
                        <div className={'flex justify-end gap-2 pr-4'}>
                            <Button
                                onClick={() => {
                                }}
                                size={'sm'}
                                text={'Approved'}
                                variant={'outlined'}
                                color={'success'}
                                className={'rounded'}/>

                            <Button
                                onClick={() => {
                                }}
                                size={'sm'}
                                text={'Rejected'}
                                variant={'outlined'}
                                color={'danger'}
                                className={'rounded'}/>
                        </div>}
                </div>


                <Table columns={columns} data={data} showCheckbox showActionColumn onRowSelect={handleRowSelect} filter={true} actionRenderer={renderActions}/>


            </div>
        </DashboardLayout>
    );
}

const columns = [
    {header: "ID", accessor: "id"},
    {header: "Beneficiary", accessor: "beneficiary"},
    {header: "Phone Number", accessor: "phoneNumber"},
    {header: "Email", accessor: "email"},
    {header: "Date of Birth", accessor: "dateofbirth"},
    {header: "Verification", accessor: "verification"},
    {header: "Origination", accessor: "origination"},
    {header: "Date", accessor: "date"},
];

const data = [
    {
        id: "1",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022",
    },
    {
        id: "2",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022"
    },
    {
        id: "3",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022"
    },
    {
        id: "4",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022"
    },
    {
        id: "5",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022"
    },
    {
        id: "6",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        email: "sample@gmail.com",
        dateofbirth: "4 April, 2001",
        verification: "Verified",
        origination: "Field App",
        date: "12 Dec, 2022"
    },
];

Beneficiaries.getLayout = (page: ReactNode) => (
    <Authenticated>
        {page}
    </Authenticated>
)

export default Beneficiaries;
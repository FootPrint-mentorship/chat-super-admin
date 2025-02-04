import React, {ReactNode, useState} from 'react';
import Back from "@/components/common/Back";
import Input from "@/components/input";
import Button from "@/components/button/Button";
import Filter from "@/components/icon/Filter";
import SearchIcon from "@/components/icon/SearchIcon";
import Select from "@/components/select";
import Table from "@/components/common/Table";
import DashboardLayout from "@/components/layout/dashboardLayout";
import {useRouter} from "next/router";
import {Authenticated} from "@/lib/auth/withAuth";


function DisburseFunds({}) {
    const [search, setSearch] = React.useState("");
    const [listFilter, setListFilter] = useState<string | number>('today')
    const [selected, setSelected] = useState<any>([])

    const {query} = useRouter()

    console.log(query)

    const handleRowSelect = (selectedRows: any[]) => {
        console.log("Selected rows:", selectedRows);
        setSelected(selectedRows)
    };

    return (
        <DashboardLayout title={'UnDisbursed Pay'}>
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

                <div className="flex justify-end items-center w-full mt-8">
                    <Button
                        onClick={() => {
                        }}
                        size={'sm'}
                        text={'Disburse Fund'}
                        variant={'contained'}
                        color={'success'}
                        className={'rounded'}/>
                </div>

                <div className={'shadow-sm w-full flex flex-col gap-4'}>
                    <div className="flex justify-between items-center w-full mt-8">
                        <h3 className="text-lg font-semibold text-primary mb-4 px-6 py-1">Beneficiaries</h3>
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
                    <Table columns={columns} data={data} showCheckbox onRowSelect={handleRowSelect}
                           filter={true}  customCss={'shadow-none'}/>
                </div>


            </div>
        </DashboardLayout>
    );
}

const columns = [
    {
        header: "Program ID", accessor: "id"
    },
    {header: "Beneficiary", accessor: "beneficiary"},
    {header: "Phone Number", accessor: "phoneNumber"},
    {header: "Undisbursed Pay", accessor: "undisbursedpay"},
];

const data = [
    {
        id: "1",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
    {
        id: "2",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
    {
        id: "3",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
    {
        id: "4",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
    {
        id: "5",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
    {
        id: "6",
        beneficiary: "Leslie Alexander",
        phoneNumber: "2348132205304",
        undisbursedpay: "N5000",
    },
];

DisburseFunds.getLayout = (page: ReactNode) => (
    <Authenticated>
        {page}
    </Authenticated>
)

export default DisburseFunds;
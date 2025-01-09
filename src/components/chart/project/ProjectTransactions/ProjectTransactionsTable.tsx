import React, {useState} from 'react';
import Select from "@/components/select";
import Button from "@/components/button/Button";
import ExcelIcon from "@/components/icon/ExcelIcon";
import ProjectTransactionMobile from "@/components/chart/project/ProjectTransactions/ProjectTransactionMobile";
import Table from "@/components/common/Table";

function ProjectTransactionsTable() {

    const [listFilter, setListFilter] = useState<string | number>('status');

    const renderExpandedRow = (row: any) => (
        <div className={'border-t py-4 flex flex-col gap-6 border-gray-200'}>
            <h3 className="font-normal text-lg">Transaction Hash: <span className={'text-secondaryBgColor underline'}>24jtgnlk467l4jnjjgkelng987948ohnjlkvsb874960p943793</span> </h3>
            <div className="flex justify-between flex-col lg:flex-row gap-4 bg-divider rounded-lg p-4">
                <div className={'flex-col flex gap-1'}>
                    <p><strong>Quality</strong></p>
                    <p>2</p>
                </div>
                <div className={'flex-col flex gap-1'}>
                    <p><strong>Item/Product</strong> </p>
                    <p>Laptop</p>
                </div >
                <div className={'flex-col flex gap-1'}>
                    <p><strong>Unit Cost</strong></p>
                    <p>10000</p>
                </div>
            </div>


        </div>
    );
    return (
        <div>
        <div className={'hidden lg:inline-block rounded-lg shadow-lg w-full'}>
            <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold text-primary mb-4 px-6 py-1">Project Transactions</h3>
                <div className={'flex justify-end gap-2 pr-4'}>
                    <div>
                        <label className="mr-2 text-sm font-medium">Filter By:</label>
                        <Select size={'sm'} placeholder={'10'}
                                variant={'outlined'}
                                border={'border-none'}
                                className={'border-none'}
                                value={listFilter} onChange={(e) => {
                            setListFilter(e)
                        }}
                                options={[{value: 'status', label: "Status"}, {value: '20', label: "20"}, {
                                    value: '30',
                                    label: "30"
                                }, {value: '40', label: "40"}, {value: '50', label: "50"}]}/>

                    </div>
                    <Button
                        onClick={() => {
                        }}
                        size={'sm'}
                        icon={<ExcelIcon />}
                        text={'Export'}
                        variant={'outlined'}
                        color={'success'}
                        className={'rounded'}/>
                </div>
            </div>
            <div className="overflow-x-auto bg-white ">
                <Table columns={columns} data={data} filter={true} showExpandColumn customCss={'overflow-x-hidden'}  renderExpandedRow={renderExpandedRow}  />
            </div>
        </div>

            <div className={'lg:hidden'}>
                <ProjectTransactionMobile/>
            </div>

        </div>
    );
}



const columns = [
    {header: "Beneficiary", accessor: "beneficiary"},
    {header: "Vendor", accessor: "vendor"},
    {header: "Amount", accessor: "amount"},
    {header: "Status", accessor: "status"},
    {header: "Date", accessor: "date"},
];


const data = [

    {
        id: 1,
        beneficiary: "Janet Woodpecker",
        vendor: "Mutiu Adepoju",
        amount: "NGN 25,000",
        status: "Completed",
        date: "Dec 3, 2020 12:45 pm",
    },
    {
        id: 2,
        beneficiary: "Janet Woodpecker",
        vendor: "Mutiu Adepoju",
        amount: "NGN 25,000",
        status: "Completed",
        date: "Dec 3, 2020 12:45 pm",
    },
]

export default ProjectTransactionsTable;
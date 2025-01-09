import React, {useState} from 'react';
import Tabs from "@/components/content/project/table/Tabs";
import Button from "@/components/button/Button";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import Filter from "@/components/icon/Filter";
import Select from "@/components/select";
import Table from "@/components/common/Table";
import HDot from "@/components/icon/HDot";

const renderActions = (row: any) => (
    <div className="flex items-center gap-2"  onClick={() => {
        console.log(row)
    }}>
        <p className={'text-secondaryBgColor text-xs underline cursor-pointer'}>Resend Token</p>
        <HDot />
    </div>
);

function SmsTokenQrCodesDrawer({setOpenSmsToken, openSmsToken}:{setOpenSmsToken: React.Dispatch<React.SetStateAction<boolean>>, openSmsToken: boolean}) {

    const [activeTab, setActiveTab] = useState<number>(1)

    const [search,setSearch] = useState('')

    const [listFilter,setListFilter] = useState<string | number >('')


    return (
        <div className={`${openSmsToken ? 'fixed' : 'hidden '} w-full flex justify-end top-0 right-0 z-40 h-screen bg-opacity-80 bg-black`}>
            <div className={`p-4 bg-white rounded-tl-2xl rounded-bl-2xl w-[70%]`}>
                <h5 className="inline-flex items-center mb-4 text-base font-semibold text-primary">
                    Donor List
                </h5>
                <button onClick={() => {
                    setOpenSmsToken(false)
                }} type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
                        className="text-primary bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className={'flex gap-2 mb-6 justify-between items-center w-full'}>
                    <div className={'flex gap-2 w-[50%]'}>
                        <Input className={'border-[#707FA3] rounded-lg'} icon={<SearchIcon/>}
                               placeholder={'Search by beneficiary...'}
                               value={search} onChange={(e) => {
                            setSearch(e.target.value)
                        }}/>

                        <Button size={"md"} text={"Filter by Project"} variant={'outlined'} color={'secondary'}
                                className={'rounded-lg  hover:bg-white'}
                                icon={<Filter/>}
                        />
                    </div>

                    <Button size={"md"} text={"Resend All Tokens"} variant={'contained'} color={'success'}
                            className={'rounded-lg'}

                    />
                </div>

                <div className={'px-6 py-1 flex items-center justify-between w-full'}>
                    <Tabs setActiveTab={setActiveTab} activeTab={activeTab}
                          tabItems={[{name: "SMS Tokens", value: 1}, {name: "QR Codes", value: 2}, {
                              name: "Wallet",
                              value: 3
                          }]}/>

                    <div>
                        <label className="mr-2 text-sm font-medium">Filter By:</label>
                        <Select size={'sm'} placeholder={'10'}
                                variant={'outlined'}
                                border={'border-none'}
                                className={'border-none'}
                                value={listFilter} onChange={(e) => {
                            setListFilter(e)
                        }}
                                options={[{value: 'Today', label: "Today"}, {value: '20', label: "20"}, {
                                    value: '30',
                                    label: "30"
                                }, {value: '40', label: "40"}, {value: '50', label: "50"}]}/>

                    </div>

                </div>


                <Table columns={columns} data={data} filter={true} showActionColumn customCss={'h-[600px] overflow-x-hidden'} actionRenderer={renderActions}/>


            </div>
        </div>
    );
}

const columns = [
    {header: "Program ID", accessor: "id"},
    {header: "Beneficiary", accessor: "beneficiary"},
    {header: "Project", accessor: "project"},
    {header: "Amount", accessor: "amount"},
    {header: "Balance", accessor: "balance"},
    {header: "SMS Token", accessor: "token"},
];

const data = [

    {
        id: "123456",
        beneficiary: "Ralph Edwards",
        project: "Feed the Poor",
        amount: "N125,000.00",
        balance: "N50,000.00",
        token: "FX34806NF8",
    },

    {
        id: "12345",
        beneficiary: "Ralph Edwards",
        project: "Feed the Poor",
        amount: "N125,000.00",
        balance: "N50,000.00",
        token: "FX34806NF8",
    },

    {
        id: "1234",
        beneficiary: "Ralph Edwards",
        project: "Feed the Poor",
        amount: "N125,000.00",
        balance: "N50,000.00",
        token: "FX34806NF8",
    },


];


export default SmsTokenQrCodesDrawer;


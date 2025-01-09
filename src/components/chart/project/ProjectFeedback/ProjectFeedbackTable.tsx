import React, {useState} from 'react';
import Tabs from "@/components/content/project/table/Tabs";
import {PaginationTwo} from "@/components/pagination";
import Select from "@/components/select";
import BeneficiariesComplaints from "@/components/chart/project/ProjectFeedback/BeneficiariesComplaints";

function ProjectFeedbackTable({setActiveTab, activeTab, tabItems}: {tabItems: any, activeTab: number, setActiveTab: React.Dispatch<React.SetStateAction<number>> }) {
    const [listFilter, setListFilter] = useState<string | number>('All Status');
    return (
        <div>
            <div className="hidden lg:inline-block mb-6 rounded-lg shadow-lg w-full">

                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold text-primary mb-4 px-6 py-1">Project Feedback</h3>
                    <div>
                        <label className="mr-2 text-sm font-medium">Filter By:</label>
                        <Select size={'sm'} placeholder={'10'}
                                variant={'outlined'}
                                border={'border-none'}
                                className={'border-none'}
                                value={listFilter} onChange={(e) => {
                            setListFilter(e)
                        }}
                                options={[{value: 'All Status', label: "All Status"}, {value: '20', label: "20"}, {
                                    value: '30',
                                    label: "30"
                                }, {value: '40', label: "40"}, {value: '50', label: "50"}]}/>

                    </div>
                </div>
                <div className={'px-6 py-1'}>
                    <Tabs setActiveTab={setActiveTab} activeTab={activeTab} tabItems={tabItems}/>
                </div>
                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                    <table className="min-w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Program ID</th>
                            <th className="px-6 py-3">Beneficiary</th>
                            <th className="px-6 py-3">Email Address</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b">
                            <td className="px-6 py-4">1234567</td>
                            <td className="px-6 py-4">Olivia Rhye</td>
                            <td className="px-6 py-4">karlkeller@gmail.com</td>
                            <td className="px-6 py-4">
                                <button className="text-secondaryBgColor underline">View</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <PaginationTwo filter={true}/>
                </div>
            </div>

            <div className={'lg:hidden'}>
                <BeneficiariesComplaints/>
            </div>

        </div>

    );
}

export default ProjectFeedbackTable;
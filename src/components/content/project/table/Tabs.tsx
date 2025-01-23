import React from 'react';
import {capitalize} from "lodash"

interface TabsProps {
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
    activeTab: number;
    tabItems: any
}

function Tabs({setActiveTab,activeTab, tabItems}: TabsProps) {
    return (
        <div className="text-sm font-medium text-center text-[#707FA3] mb-6">
            <ul className="flex w-full justify-between md:justify-normal md:gap-4">
                {tabItems.map((item: any, index: number) => (
                    <li onClick={() => {
                        setActiveTab(index + 1)
                    }}
                        className={`inline-block text-[12px] lg:text-[18px] font-bold cursor-pointer ${activeTab === index + 1 ? 'border-[#17CE89]' : 'border-transparent'} ${activeTab === index + 1 ? 'text-[#17CE89]' : 'inherit'} p-2 border-b-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
                        key={index}>{capitalize(item.name)}</li>
                ))}

            </ul>

        </div>
    );
}



export default Tabs;
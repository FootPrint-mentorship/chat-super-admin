import React from 'react';
import {GenderChart} from "@/components/chart/dashboard/Gender.chart";
import {AgeGroupChart} from "@/components/chart/dashboard/AgeGroup.Chart";
import {MaritalStatusChart} from "@/components/chart/dashboard/MaritalStatus.Chart";
import {LocationChart} from "@/components/chart/dashboard/BeneficiaryByLocation.Chart";
import {BeneficiaryBalancesChart} from "@/components/chart/dashboard/BeneficiaryBalances.Chart";
import {VendorTransactionPerBeneficiary} from "@/components/chart/dashboard/VendorTransactionPerBeneficiary.Chart";
import BeneficiaryMetrics from "@/components/card/BeneficiaryMetrics";

interface ChartCardGroupedProps {
    chartType: string;
    setFilterOption: React.Dispatch<React.SetStateAction<string>>;
    handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    smallScreen: boolean;
    filterOption: string;
}

function ChartCardGrouped({chartType,setFilterOption,handleSelectChange,smallScreen, filterOption}: ChartCardGroupedProps) {
    return (
        <div className={' hidden xl:grid  grid-cols-1 lg:grid-cols-2   w-full mt-8 gap-8'}>
            <div className={'w-full'}>
                <div className={'flex flex-col w-full bg-white py-4 px-8 rounded-lg shadow-sm'}>
                    <div className={'flex items-center justify-between w-full'}>
                        <h4 className={'text-[#25396F] font-bold'}>{chartType}</h4>


                        <div className={'flex items-center justify-end gap-4 w-full'}>
                            <div className={'flex items-center gap-2'}>
                                {React.Children.toArray(
                                    ["24H", "1W", "1M", "6M", "1Y"].map((item,index) =>
                                        <p key={index} onClick={() => {
                                            setFilterOption(item)
                                        }} style={{
                                            background: filterOption === item ? "#18C474" : "inherit",
                                            color: filterOption === item ? "#fff" : "inherit",
                                        }} className={'cursor-pointer px-2 py-3 rounded-lg text-xs'}>{item}</p>
                                    )
                                )}
                            </div>

                            <select value={chartType} onChange={handleSelectChange}
                                    className="bg-gray-50 w-[40%] border-solid border-[#17CE89] border-2 text-gray-900 text-sm rounded-lg p-2">

                                <option value="Gender">Gender</option>
                                <option value="Age Group">Age Group</option>
                                <option value="Marital Status">Marital Status</option>
                                <option value="Location">Location</option>
                                <option value="Beneficiary Balances">Beneficiary Balances</option>
                                <option value="Vendor Transaction Per Beneficiary">Vendor Transaction Per
                                    Beneficiary
                                </option>
                            </select>
                        </div>
                    </div>

                    {chartType === "Gender" && <GenderChart screen={smallScreen}/>}
                    {chartType === "Age Group" && <AgeGroupChart screen={smallScreen}/>}
                    {chartType === "Marital Status" && <MaritalStatusChart screen={smallScreen}/>}
                    {chartType === "Location" && <LocationChart screen={smallScreen}/>}
                    {chartType === "Beneficiary Balances" && <BeneficiaryBalancesChart screen={smallScreen}/>}
                    {chartType === "Vendor Transaction Per Beneficiary" &&
                        <VendorTransactionPerBeneficiary screen={smallScreen}/>}

                </div>
            </div>
            <BeneficiaryMetrics/>

        </div>
    );
}

export default ChartCardGrouped;
import React, {useState} from 'react';
import Back from "@/components/common/Back";
import DashboardLayout from "@/components/layout/dashboardLayout";
import {useRouter} from "next/router";
import PersonalDetailsCard from "@/components/content/project/card/PersonalDetailsCard";
import BeneficiariesProfileMetrics from "@/components/content/project/card/BeneficiariesProfileMetrics";
import Input from "@/components/input";
import SearchIcon from "@/components/icon/SearchIcon";
import Button from "@/components/button/Button";
import Filter from "@/components/icon/Filter";
import ProductsServicesTable from "@/components/chart/project/ProductsServices/ProductsServicesTable";
import ProjectTransactionsTable from "@/components/chart/project/ProjectTransactions/ProjectTransactionsTable";

function BeneficiariesProfile() {
    const {query} = useRouter()
    const [search, setSearch] = React.useState("");

    console.log(query)
    return (
        <DashboardLayout title={''}>
            <div className={''}>
                <div className={'flex items-center justify-start w-full mt-8'}>
                    <Back link={`/projects/${query.id}/project-beneficiaries`}/>
                </div>

                <div className={'flex flex-col xl:flex-row gap-6 w-[100%] mt-4'}>

                    <div style={{flex: 4}} className={'flex flex-col gap-6'}>
                        <BeneficiariesProfileMetrics/>

                        {/* Search and Filter */}
                        <div className={'flex gap-2 w-[50%] mt-4'}>
                            <Input className={'border-[#707FA3] rounded-lg'} icon={<SearchIcon/>}
                                   placeholder={'Search...'}
                                   value={search} onChange={(e) => {
                                setSearch(e.target.value)
                            }}/>

                            <Button size={"md"} text={"Filter"} variant={'outlined'} color={'secondary'}
                                    className={'rounded-lg  hover:bg-white'}
                                    icon={<Filter/>}
                            />
                        </div>

                        {/* Products/Services Table */}
                        <ProductsServicesTable/>

                        {/* Project Transactions */}
                        <ProjectTransactionsTable/>


                    </div>

                    <div style={{flex: 2}} className="flex flex-col gap-6 mb-6">
                        <PersonalDetailsCard name={'Hakeem Mensah'} id={'2'} email={'Karlkeller@gmail.com'}
                                             status={'Verified'} created={'Saturday,12 Dec, 2020'} imageUrl={'/assets/user/avatar.jpeg'}
                                             phoneNumber={'+2348132205304'}/>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}

export default BeneficiariesProfile;
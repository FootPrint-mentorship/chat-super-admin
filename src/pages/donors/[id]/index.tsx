import React, {ReactNode, useState} from 'react';
import DashboardLayout from "@/components/layout/dashboardLayout";
import {useRouter} from "next/router";
import ProjectFeedbackTable from "@/components/chart/project/ProjectFeedback/ProjectFeedbackTable";
import ProjectTransactionsTable from "@/components/chart/project/ProjectTransactions/ProjectTransactionsTable";
import ProductsServicesTable from "@/components/chart/project/ProductsServices/ProductsServicesTable";
import BeneficiariesDemographics from "@/components/chart/project/BeneficiariesDemographics";
import DistributionCriteria from "@/components/chart/project/DistributionCriteria";
import ProjectLinks from "@/components/chart/project/ProjectLinks";
import MiddleHeaderDetails from "@/components/chart/project/MiddleHeaderDetails";
import TopHeader from "@/components/chart/project/TopHeader";
import ProjectSummary from "@/components/chart/project/ProjectSummary";
import DonorListDrawer from "@/components/content/project/card/DonorListDrawer";
import SmsTokenQrCodesDrawer from "@/components/content/project/card/SmsTokenQrCodesDrawer";
import AddProductAndService from "@/components/content/project/card/AddProductAndService";
import ProjectVersionHistory from "@/components/modal/project/ProjectVersionHistory";
import {Authenticated} from "@/lib/auth/withAuth";

const ProjectView = () => {
    const {query} = useRouter()
    const [search, setSearch] = useState('')
    const [openDonorList, setOpenDonorList] = useState(false)
    const [openSmsToken, setOpenSmsToken] = useState(false)
    const [openAddEditProduct, setAddEditProduct] = useState(false)
    const [openHistory, setOpenHistory] = useState(false)


    const [activeTab, setActiveTab] = useState<number>(1)

    return (<DashboardLayout title={query.id as string} header={''}>


        <DonorListDrawer openDonorList={openDonorList} setOpenDonorList={setOpenDonorList}/>
        <SmsTokenQrCodesDrawer openSmsToken={openSmsToken} setOpenSmsToken={setOpenSmsToken}/>
        <AddProductAndService openAddEditProduct={openAddEditProduct} setAddEditProduct={setAddEditProduct}/>
        <ProjectVersionHistory isOpen={openHistory} onClose={() => {
            setOpenHistory(false)
        }}/>


            <div className="flex flex-col  p-6 space-x-4">




                {/* Left Sidebar Section */}
                <div className="flex flex-col w-full">
                    {/* top header */}

                  <TopHeader openAddEditProduct={openAddEditProduct} setAddEditProduct={setAddEditProduct}/>

                    {/* top header Ends */}

                    {/* Middle header Start */}

                    <MiddleHeaderDetails setSearch={setSearch} search={search} openSmsToken={openSmsToken} setOpenSmsToken={setOpenSmsToken} />


                    {/* Middle header End */}
                    <div className={'flex flex-col xl:flex-row gap-4'}>


                        <div style={{flex: 3}} className={'flex flex-col gap-6'}>

                            {/* project links Start */}

                            <ProjectLinks/>

                            {/* project links End */}

                           <DistributionCriteria/>

                            <div className="flex-1 flex flex-col gap-6 rounded-lg ">
                                {/* Beneficiaries and Demographics */}

                                <BeneficiariesDemographics setOpenDonorList={setOpenDonorList} openDonorList={openDonorList}/>

                                {/* Products/Services Table */}
                                <ProductsServicesTable/>

                                {/* Project Feedback */}
                               <ProjectFeedbackTable setActiveTab={setActiveTab} activeTab={activeTab} tabItems={[{name: "feedback", value: 1},{name: "compliant", value: 2}]}/>

                                {/* Project Transactions */}
                               <ProjectTransactionsTable/>
                            </div>

                        </div>




                        {/* Project Summary */}
                       <ProjectSummary setOpenHistory={setOpenHistory}/>

                    </div>

                </div>


            </div>
    </DashboardLayout>);
};

ProjectView.getLayout = (page: ReactNode) => (
    <Authenticated>
        {page}
    </Authenticated>
)

export default ProjectView;

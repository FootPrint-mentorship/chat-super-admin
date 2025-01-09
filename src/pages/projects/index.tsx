import React, {ReactNode, useState} from 'react';
import DashboardLayout from "@/components/layout/dashboardLayout";
import ProjectsTable from "@/components/content/project/table/ProjectsTable";
import ProjectsList from "@/components/content/project/table/ProjectTableMobile";
import SelectProjectTypeModal from "@/components/modal/project/ProjectType";
import LargeScreen from "@/components/content/project/header/LargeScreen";
import MobileScreen from "@/components/content/project/header/MobileScreen";
import Tabs from "@/components/content/project/table/Tabs";
import {Authenticated} from "@/lib/auth/withAuth";


function Index() {
    const [search, setSearch] = React.useState("");
    const [isOpen, setIsOpen] = useState<"item" | "cash" | undefined>(undefined);
    const [activeTab, setActiveTab] = React.useState(1);
    const [isSelectModalOpen, setSelectModalOpen] = useState(false);



    return (
        <DashboardLayout title={"Dashboard"} header={'NGO'}>
            <div className={'flex flex-col gap-8'}>

                <SelectProjectTypeModal
                    isOpen={isSelectModalOpen}
                    onClose={() => setSelectModalOpen(false)}
                    setIsOpen={setIsOpen}
                />

                {/* Header Start */}

               <LargeScreen setSelectModalOpen={setSelectModalOpen} search={search} setSearch={setSearch} />

               <MobileScreen search={search} setSearch={setSearch} setIsOpen={setIsOpen} isOpen={isOpen} />

                {/* End of Header */}


                {/* Table Start */}

                <div>
                 <Tabs setActiveTab={setActiveTab} activeTab={activeTab} tabItems={tabItems}/>
                    <div className={'hidden lg:inline'}>
                        <ProjectsTable setIsOpen={setIsOpen} isOpen={isOpen}/>
                    </div>
                    <div className={'inline lg:hidden'}>
                        <ProjectsList setIsOpen={setIsOpen} isOpen={isOpen}/>
                    </div>
                </div>

                {/* Table End */}


            </div>
        </DashboardLayout>
    )
}
const tabItems = [
    {
        name: "Cash Projects",
        value: 1,
    },

    {
        name: "Item Project",
        value: 2,
    },

    {
        name: "Archived Projects",
        value: 2,
    },
]

Index.getLayout =(page: ReactNode) => {
    return (
        <Authenticated>
            {page}
        </Authenticated>
    );
};


export default Index;
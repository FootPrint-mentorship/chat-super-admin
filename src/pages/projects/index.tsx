import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import ProjectsTable from "@/components/content/project/table/ProjectsTable";
import ProjectsList from "@/components/content/project/table/ProjectTableMobile";
import SelectProjectTypeModal from "@/components/modal/project/ProjectType";
import LargeScreen from "@/components/content/project/header/LargeScreen";
import MobileScreen from "@/components/content/project/header/MobileScreen";
import Tabs from "@/components/content/project/table/Tabs";
import { Authenticated } from "@/lib/auth/withAuth";
import DonorsLayout from "../donors";
import WithdrawalRequest from "@/components/modal/project/WithdrawalRequest";

function Index() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState<"item" | "cash" | undefined>(undefined);
  const [activeTab, setActiveTab] = useState(1);
  const [isSelectModalOpen, setSelectModalOpen] = useState(false);

  const tabItems = [
    {
      name: "All Donors",
      value: 1,
    },
    {
      name: "Withdrawal Requests",
      value: 2,
    },
  ];

  return (
    <DashboardLayout title="Donor" header="NGO">
      <div className="flex flex-col gap-8">
        {/* Modal */}
        <SelectProjectTypeModal
          isOpen={isSelectModalOpen}
          onClose={() => setSelectModalOpen(false)}
          setIsOpen={setIsOpen}
        />

        {/* Header */}
        <LargeScreen
          setSelectModalOpen={setSelectModalOpen}
          search={search}
          setSearch={setSearch}
        />
        <MobileScreen
          search={search}
          setSearch={setSearch}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

        {/* Tabs and Table */}
        <div>
          <Tabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabItems={tabItems}
          />

          {/* Conditional Rendering Based on Tab */}
          {activeTab === 1 && (
            <div>
              {/* Organization component goes here */}
              <DonorsLayout />
            </div>
          )}

{activeTab === 2 && (
            <div>
              {/* Organization component goes here */}
              <WithdrawalRequest onClose={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          )}
         
        </div>
      </div>
    </DashboardLayout>
  );
}

Index.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default Index;

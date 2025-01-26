import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
// import Tabs from "@/components/content/project/table/Tabs";
import { Authenticated } from "@/lib/auth/withAuth";
import Tabs from "@/components/settingscomponent/Tabs";
import PasswordTabs from "@/components/settingscomponent/PasswordTabs";

const index = () => {
  const handleTabChange = (selectedTab: string) => {
    console.log("Selected Tab:", selectedTab);
  };
  const handlePasswordTabChange = (selectedTab: string) => {
    console.log("Active Tab:", selectedTab);
  };

  return (
    <DashboardLayout title={"Settings"} header={"Settings"}>
      <div>
        <div className=" bg-gray-50  p-6">
          <div className="max-w-md w-full">
            <Tabs
              tabs={["Password & 2FA", "Plans & Billing"]}
              onTabChange={handleTabChange}
            />
          </div>
        </div>
        {/* passoword or 2FA */}
        <div className=" bg-gray-50  p-6">
          <div className="w-full max-w-md">
            <PasswordTabs
              tabs={["Password", "2-Factor Authentication"]}
              onTabChange={handlePasswordTabChange}
            />
            {/* You can render tab-specific content below */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm">
                Content for the selected tab will go here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*password  */}
    </DashboardLayout>
  );
};
index.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default index;

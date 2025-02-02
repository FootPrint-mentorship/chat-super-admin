import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
// import Tabs from "@/components/content/project/table/Tabs";
import { Authenticated } from "@/lib/auth/withAuth";
import Tabs from "@/components/settingscomponent/Tabs";
import PasswordTabs from "@/components/settingscomponent/PasswordTabs";
import Password from "@/components/settingscomponent/Password";
import TwoFactorAuth from "@/components/settingscomponent/TwoFactorAut";
import Modal from "../../components/common/Modal";

const Index = () => {
  const [activePasswordTab, setActivePasswordTab] = useState("Password");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleTabChange = (selectedTab: string) => {
    console.log("Selected Tab:", selectedTab);
  };
  const handlePasswordTabChange = (selectedTab: string) => {
    console.log("Active Tab:", selectedTab);
    setActivePasswordTab(selectedTab);
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
        <div className="p-6 rounded-lg shadow-md border max-w-2xl">
          <div className=" bg-gray-50  p-6">
            <div className="w-full max-w-md">
              <PasswordTabs
                tabs={["Password", "2-Factor Authentication"]}
                onTabChange={handlePasswordTabChange}
              />
              {/* Active tab*/}
              {activePasswordTab === "Password" ? (
                <div>
                  <Password />
                </div>
              ) : (
                <div>
                  <p>
                    <TwoFactorAuth />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
        <div>code here</div>
      </Modal>}

      {/*password  */}
    </DashboardLayout>
  );
};
Index.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default Index;

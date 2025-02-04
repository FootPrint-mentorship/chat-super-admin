import React, { ReactNode, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import ProjectsTable from "@/components/content/project/table/ProjectsTable";
import ProjectsList from "@/components/content/project/table/ProjectTableMobile";
import SelectProjectTypeModal from "@/components/modal/project/ProjectType";
import LargeScreen from "@/components/content/project/header/LargeScreen";
import MobileScreen from "@/components/content/project/header/MobileScreen";
import Tabs from "@/components/content/project/table/Tabs";
import { Authenticated } from "@/lib/auth/withAuth";
import NgoPaymentCard from "@/components/card/NgoPaymentCard";
import NgoPayments from "@/components/ngo/PaymentCard";
import DonutChart from "@/components/chart/DonutChart";
import HorizontalBarChart from "@/components/chart/HorizontalBarChart";
import BarChart from "@/components/chart/BarChart";
import VendorTransactionChart from "@/components/chart/VendorTransactionChart";
import FoundationCard from "@/components/ngocontacttext/NgoTextCard";
import { Assets } from "@/util/Assets";

function Index() {
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = useState<"item" | "cash" | undefined>(undefined);
  const [activeTab, setActiveTab] = React.useState(1);
  const [isSelectModalOpen, setSelectModalOpen] = useState(false);

  const chartData = {
    labels: ["Single", "Married", "Divorced"],
    datasets: [
      {
        data: [50, 30, 20], // Example data
        backgroundColor: ["#064E3B", "#10B981", "#A7F3D0"], // Tailwind CSS colors
      },
    ],
  };
  const horizontData = {
    labels: ["Kaduna", "Abuja", "Lagos", "Jos"],
    datasets: [
      {
        label: "Male",
        data: [70, 80, 60, 50], // Example data
        backgroundColor: "#10B981", // Tailwind green-500
      },
      {
        label: "Female",
        data: [30, 20, 40, 50], // Example data
        backgroundColor: "#6EE7B7", // Tailwind green-300
      },
    ],
  };
  const bData = {
    labels: [
      "10,000",
      "15,000",
      "20,000",
      "25,000",
      "30,000",
      "35,000",
      "40,000",
      "45,000",
    ],
    datasets: [
      {
        label: "Beneficiary Balances",
        data: [6000, 8000, 7500, 7000, 8000, 9000, 8500, 7800], // Example data
        backgroundColor: "#10B981", // Tailwind green-500
      },
    ],
  };
  const vendorTransactionData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Transactions",
        data: [4000, 6000, 5000, 5500, 7000, 6000, 6500, 6000, 4500], // Example data
        backgroundColor: "#10B981", // Tailwind green-500
      },
    ],
  };

  return (
    <DashboardLayout title={"NGOs"} header={"NGO"}>
      <div className={"flex flex-col gap-8"}>
        <div>
          <p className="">NGOs &nbsp; / &nbsp; Blue Orange Foundation</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Blue Orange Foundation
            </h2>
          </div>
          <div>
            <button
              type="button"
              className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-[#17CE89]  rounded-lg text-center"
            >
              Update info
            </button>
          </div>
        </div>
        <NgoPayments />
        <div className=" flex justify-center gap-5">
          {/* chat section */}
          <div>
            <div className="flex gap-5">
              <div className="  ">
                <DonutChart
                  title="Beneficiary By Marital Status"
                  data={chartData}
                />
              </div>
              <div className="">
                <HorizontalBarChart
                  title="Beneficiary By Location"
                  data={horizontData}
                />
              </div>
            </div>
            {/* bar chart */}
            <div className="flex gap-5 mt-10">
              <div className="">
                <BarChart title="Beneficiary Balances" data={bData} />
              </div>
              <div className="">
                <VendorTransactionChart
                  title="Vendor Transaction Per Beneficiary"
                  data={vendorTransactionData}
                />
              </div>
            </div>
          </div>
          {/* Orange */}
          <div className=" ">
            <FoundationCard
              title="Blue Orange Foundation"
              logo="/assets/blue-orange.png"
              about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget molestie nisl commodo nulla. Diam eget massa magna diam adipiscing porttitor nullam volutpat egestas. Enim in sapien auctor a amet. Scelerisque vitae porta dictum egestas gravida elementum arcu."
              phone="+234 813 220 5304"
              email="example@gmail.com"
              website="https://blueorange.org"
              location="Ikeja, Lagos, Nigeria"
              createdDate="12 Dec, 2020"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>

    //  <DashboardLayout title={"NGOs"} header={"NGO"}>
    //   <div className={"flex flex-col gap-8"}></div>
    // </DashboardLayout>
  );
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
];

Index.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default Index;

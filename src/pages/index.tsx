import React, { ReactNode, useCallback, useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Header from "@/components/content/dashboard/Header";
import KycCard from "@/components/content/dashboard/KYCCard";
import { GenderChart } from "@/components/chart/dashboard/Gender.chart";
import BeneficiaryMetrics from "@/components/card/BeneficiaryMetrics";
import { LocationChart } from "@/components/chart/dashboard/BeneficiaryByLocation.Chart";
import { BeneficiaryBalancesChart } from "@/components/chart/dashboard/BeneficiaryBalances.Chart";
import { VendorTransactionPerBeneficiary } from "@/components/chart/dashboard/VendorTransactionPerBeneficiary.Chart";
import DateMetricsCard from "@/components/card/DateMetricsCard";
import VendorMetricsCard from "@/components/card/VendorsMetrics";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import ChartCardGrouped from "@/components/chart/dashboard/ChartCardGrouped";
import axios from "axios";
import Metrics from "@/components/content/dashboard/Metrics";
import { Authenticated } from "@/lib/auth/withAuth";
import { useAppDispatch } from "@/hook/useReduxTypes";
import * as XLSX from 'xlsx';

import Input from "@/components/input";
import Button from "@/components/button/Button";
import Filter from "@/components/icon/Filter";
import SearchIcon from "@/components/icon/SearchIcon";
import SortIcon from "@/components/icon/SortIcon";
import AddIcon from "@/components/icon/AddIcon";
import ExcelIcon from "@/components/icon/ExcelIcon";
import Tabs from "@/components/content/project/table/Tabs";
import ProjectsTable from "@/components/content/project/table/ProjectsTable";
import ProjectsList from "@/components/content/project/table/ProjectTableMobile";
import Organization from "@/components/content/organizations/table/Active";
import PendingApproval from "@/components/content/organizations/table/PendingApproval"
import AddOrganizationForm from "@/components/modal/CreateNew";

const MapComponent = dynamic(
  () => import("@/components/content/dashboard/MapComponent"),
  {
    ssr: false,
  }
);

const downloadExcel = ()=>{
    // const worksheet = XLSX.utils.json_to_sheet("");
}

interface Home {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSelectModalOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setSearch, search, setSelectModalOpen }: Home) {

  const smallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const [showMap, setShowMap] = useState(false);

  const [type, setType] = useState<string>("normal");
  const [chartType, setChartType] = useState<string>("Gender");
  const [filterOption, setFilterOption] = useState<string>("24H");
  const [isOpen, setIsOpen] = useState<"item" | "cash" | undefined>(undefined);
  const [activeTab, setActiveTab] = React.useState(1);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  const toggleMap = () => {
    if (showMap && type === "normal") {
      setType("3d");
    } else if (showMap && type !== "normal") {
      setShowMap(!showMap);
      setType("normal");
    } else {
      setShowMap(!showMap);
    }
  };

  const handleSelectChange = (event: any) => {
    setChartType(event.target.value);
  };

  const [topology, setTopology] = useState<any>(undefined);

  const getTopology = async () => {
    const res = await axios.get(
      "https://code.highcharts.com/mapdata/custom/world.topo.json"
    );
    console.log("res:", res);
    setTopology(res?.data);
  };


  const tabItems = [
    { name: "Active", value: 1 },
    { name: "Pending Approval", value: 2 },
  ];

  const handleOpenModal = () => {
    setActiveTab(2); // Switch to the "Pending Approval" tab
    setModalOpen(true); // Optionally open a modal if needed
  };
  

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <DashboardLayout title={"NGOs"} header={"NGO"}>
        <div className={"hidden lg:flex items-center justify-between  w-full"}>
          <div className={"flex gap-2 w-[50%]"}>
            <Input
              className={
                "border-[#707FA3] rounded-lg text-[#707FA3] font-[400]"
              }
              icon={<SearchIcon />}
              placeholder={"Search organizations..."}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button
              size={"md"}
              text={"Filter"}
              variant={"outlined"}
              color={"secondary"}
              className={"rounded-lg  hover:bg-white"}
              icon={<Filter />}
            />
          </div>

          <div className={"flex gap-2"}>
            <Button
               onClick={handleOpenModal}
              icon={<AddIcon />}
              text={"Create New"}
              variant={"contained"}
              color={"success"}
              className={"rounded-lg"}
            />
            
            
            <Button
              onClick={downloadExcel}
              icon={<ExcelIcon />}
              text={"Export"}
              variant={"outlined"}
              color={"success"}
              className={"rounded-lg"}
            />
          </div>
        </div>

        <div className="mt-[32px]">
          <Tabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabItems={tabItems}
          />        
          {/* <div className={"hidden lg:inline"}>
            <Organization setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <div className={"inline lg:hidden"}>
            <ProjectsList setIsOpen={setIsOpen} isOpen={isOpen} />
          </div> */}
        </div>
        <div className="mt-4">
        {activeTab === 1 && (
          <div>
            <Organization setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        )}
        {activeTab === 2 && <PendingApproval setIsOpen={setIsOpen} isOpen={isOpen} />}
      </div>

        {showMap && (
          <ChartCardGrouped
            chartType={chartType}
            handleSelectChange={handleSelectChange}
            setFilterOption={setFilterOption}
            filterOption={filterOption}
            smallScreen={smallScreen}
          />
        )}

        <div
          className={
            "xl:hidden grid grid-cols-1 lg:grid-cols-2 w-full mt-8 gap-8"
          }
        >
          <GenderChart screen={smallScreen} />
          <BeneficiaryMetrics />
          {/*<AgeGroupChart screen={smallScreen}/>*/}
          {/*<MaritalStatusChart screen={smallScreen}/>*/}
          <LocationChart screen={smallScreen} />
          <BeneficiaryBalancesChart screen={smallScreen} />
          <VendorTransactionPerBeneficiary screen={smallScreen} />
          {smallScreen && <DateMetricsCard />}
          {smallScreen && <VendorMetricsCard />}
        </div>
        {isModalOpen && (
        <AddOrganizationForm onClose={handleCloseModal} />
      )}
      </DashboardLayout>
    </>
  );
}

const tabItems = [
  {
    name: "Active",
    value: 1,
  },

  {
    name: "Pending approval",
    value: 2,
  },
];

Home.getLayout = (page: ReactNode) => {
  return <Authenticated>{page}</Authenticated>;
};

export default Home;

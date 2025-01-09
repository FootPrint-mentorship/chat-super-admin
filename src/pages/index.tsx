import React, {ReactNode, useCallback, useEffect, useState} from "react";
import DashboardLayout from "@/components/layout/dashboardLayout";
import Header from "@/components/content/dashboard/Header";
import KycCard from "@/components/content/dashboard/KYCCard";
import {GenderChart} from "@/components/chart/dashboard/Gender.chart";
import BeneficiaryMetrics from "@/components/card/BeneficiaryMetrics";
import {LocationChart} from "@/components/chart/dashboard/BeneficiaryByLocation.Chart";
import {BeneficiaryBalancesChart} from "@/components/chart/dashboard/BeneficiaryBalances.Chart";
import {VendorTransactionPerBeneficiary} from "@/components/chart/dashboard/VendorTransactionPerBeneficiary.Chart";
import DateMetricsCard from "@/components/card/DateMetricsCard";
import VendorMetricsCard from "@/components/card/VendorsMetrics";
import dynamic from "next/dynamic";
import {useMediaQuery} from 'react-responsive'
import ChartCardGrouped from "@/components/chart/dashboard/ChartCardGrouped";
import axios from "axios";
import Metrics from "@/components/content/dashboard/Metrics";
import {Authenticated} from "@/lib/auth/withAuth";
import {getProfile} from "@/redux/profile/profileSlice";
import {useAppDispatch} from "@/hook/useReduxTypes";


// Dynamically import Leaflet Map to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/content/dashboard/MapComponent'), {
    ssr: false,
});

// const Map = dynamic(() => import('@/components/content/dashboard/Map'), {
//     ssr: false,
// });
const GlobeComponent = dynamic(() => import('@/components/content/dashboard/GlobeComponent'), {
    ssr: false,
});


function Home() {
    const smallScreen = useMediaQuery({query: '(max-width: 1024px)'})

    // const loading = false
    // const  isAuthenticated = true

    const [showMap, setShowMap] = useState(false);

    const [type, setType] = useState<string>("normal");
    const [chartType, setChartType] = useState<string>("Gender");
    const [filterOption, setFilterOption] = useState<string>("24H");

    const dispatch = useAppDispatch()


    // const getUserProfile = useCallback(async () => {

    //     const res = await dispatch(getProfile());

    //     console.log("profile:", res)

    // },[dispatch])


    const toggleMap = () => {
        if (showMap && type === "normal") {
            setType("3d")
        } else if (showMap && type !== "normal") {
            setShowMap(!showMap)
            setType("normal")
        } else {
            setShowMap(!showMap)

        }

    }

    const handleSelectChange = (event: any) => {
        setChartType(event.target.value)

    }

    const [topology, setTopology] = useState<any>(undefined);


    const getTopology = async () => {
        const res = await axios.get('https://code.highcharts.com/mapdata/custom/world.topo.json')
        console.log("res:", res)
        setTopology(res?.data)
    };

    // useEffect(() => {
    //     getTopology()
    //     getUserProfile()
    // }, [getUserProfile])


    return (<>
        <DashboardLayout title={"Dashboard"} header={'NGO'}>

            <div className={'hidden md:inline'}>
                <Header userName={"karlkeller"} toggleMap={toggleMap} showMap={showMap} type={type}/>
            </div>

            <KycCard/>

            <div className={''}>
                {/*{showMap && type === "normal" && <div className={'mt-8 w-full h-screen '}><Map/></div>}*/}
                {showMap && type === "normal" &&
                    <div className={'mt-8 w-full h-screen '}><MapComponent topology={topology}/></div>}

                {showMap && type !== "normal" && <GlobeComponent/>}
            </div>

            {!showMap && <Metrics/>}

            {!showMap && <ChartCardGrouped chartType={chartType} handleSelectChange={handleSelectChange}
                                           setFilterOption={setFilterOption} filterOption={filterOption}
                                           smallScreen={smallScreen}/>}

            <div className={'xl:hidden grid grid-cols-1 lg:grid-cols-2 w-full mt-8 gap-8'}>
                <GenderChart screen={smallScreen}/>
                <BeneficiaryMetrics/>
                {/*<AgeGroupChart screen={smallScreen}/>*/}
                {/*<MaritalStatusChart screen={smallScreen}/>*/}
                <LocationChart screen={smallScreen}/>
                <BeneficiaryBalancesChart screen={smallScreen}/>
                <VendorTransactionPerBeneficiary screen={smallScreen}/>
                {smallScreen && <DateMetricsCard/>}
                {smallScreen && <VendorMetricsCard/>}
            </div>
        </DashboardLayout>
    </>);
}

Home.getLayout =(page: ReactNode) => {
    return (
        <Authenticated>
            {page}
        </Authenticated>
    );
};


export default Home;

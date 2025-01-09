import type { ApexOptions } from 'apexcharts';
import {Chart} from "@/util";
import React from "react";


export const VendorTransactionPerBeneficiary = ({screen}: {screen: boolean}) => {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: true,
                export: {
                    csv: {
                        filename: 'Vendor Transaction Per Beneficiary',
                        headerCategory: 'Age',
                    },
                },
                tools: {
                    download: false,
                },
            },
            zoom: {
                enabled: false,
            },
            stacked: true,
        },
        title: {
            text: !screen ? undefined : 'Vendor Transaction Per Beneficiary',
        },
        dataLabels: {
            enabled: false,
        },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 2,
                columnWidth: '40%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        labels: ["10,000","15,000", "25,000", "35,000" ],
        fill: {
            opacity: 1,
            colors: ['#27AE60', '#27AE60'],
        },
        colors: ['#94c894'],
        legend: {
            show: false,
            position: 'top',
        },
        grid: {
            strokeDashArray: 6,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                },
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                },
            },
        },
    };

    const series = [ {
        name: 'Total',
        data: [8000, 6000, 4000, 2000]
    }]
    return (
        // <div
        //     className={'w-full'}
        // >
        //     <div className={'flex flex-col w-full bg-white p-8 rounded-lg shadow-sm'}>

                <Chart options={options} series={series} type="bar" height={350} />

        //     </div>
        // </div>
    );
};
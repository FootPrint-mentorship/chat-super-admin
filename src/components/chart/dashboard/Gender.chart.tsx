import React from 'react';
import {ApexOptions} from "apexcharts";
import {Chart} from "@/util";

export const GenderChart = ({screen}: {screen: boolean}) => {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: true,
                export: {
                    csv: {
                        filename: 'Gender',
                        headerCategory: 'Age',
                    },
                },
                tools: {
                    download: false

                }
            },
            zoom: {
                enabled: false,
            },
            stacked: true,
        },
        title: {
            text: screen ? "Gender" : undefined
        },
        dataLabels: {
            enabled: false,
        },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5,
                columnWidth: '40%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        labels: ["0-5","6-12", "13-18", "19-23","24-28" ],
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
            data: [0, 40, 50, 60, 70]
    }]
    return (
        // <div
        //     className={'w-full'}
        // >
        //     <div className={'flex flex-col w-full bg-white p-8 rounded-lg shadow-sm'}>

                    <Chart options={options} series={series} type="bar" height={350} />
        //
        //     </div>
        // </div>
    );
};

import type { ApexOptions } from 'apexcharts';
import {Chart} from "@/util";
import React from "react";


export const LocationChart = ({screen}:{screen:boolean}) => {

    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: true,
                export: {
                    csv: {
                        filename: 'Beneficiary By Location',
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
            text: !screen ? undefined : 'Beneficiary By Location',
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff'],
            },
            formatter: function (val, opts) {
                // return opts.w.globals.labels[opts.dataPointIndex];
                if (opts.seriesIndex === 0) {
                    return opts.w.globals.labels[opts.dataPointIndex];
                }
                return '';
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 2,
                columnWidth: '40%',
                dataLabels: {
                    position: 'center',
                },
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        labels: ["Male", "Female"],
        fill: {
            opacity: 1,
            colors: ['#27AE60', '#E9F7EF'],
        },
        colors: ['#27AE60','#E9F7EF'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'left',
            itemMargin: {
                horizontal: 25,
                vertical: 5,
            },
            markers: {
                size: 8,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                shape: 'rounded',
            },
        },
        grid: {
            strokeDashArray: 6,
        },
        xaxis: {
            categories: ["Kaduna", "Abuja", "Lagos", "Jos"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
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
                show: false,
                style: {
                },
            },
        },
    };

    const series = [ {
        name: 'Male',
        data: [20, 40, 50, 60]
    },
        {
        name: 'Female',
        data: [10, 30, 40, 20]
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
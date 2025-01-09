import type { ApexOptions } from 'apexcharts';
import {Chart} from "@/util";
import React from "react";


export const GenderChart = () => {

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
                    download: false,
                },
            },
            zoom: {
                enabled: false,
            },
            stacked: true,
        },
        title: {
            text: 'Gender',
        },
        dataLabels: {
            enabled: false,
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
                horizontal: false,
                borderRadius: 2,
                columnWidth: '40%',
                dataLabels: {
                    position: 'center',
                },
            },
        },
        stroke: {
            show: false,
            width: 2,
            colors: ['transparent'],
        },
        labels: ["Male", "Female"],
        fill: {
            opacity: 1,
            colors: ['#27AE60', '#E8FCCF'],
        },
        colors: ['#27AE60','#E8FCCF'],
        legend: {
            show: true,
            position: 'bottom',
            verticalAlign: 'center',
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
            categories: ["0 - 5", "6 - 12", "13 - 18", "19 - 23", "24 - 28", "29 - 33", "34 - 39", "40 - 45", "46 - 50", "51 - 55", "56 - 60", "60 - 70+"],
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
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
                show: true,
                style: {
                },
            },
        },
    };

    const series = [ {
        name: 'Male',
        data: [20, 40, 50, 60, 30, 34, 54, 44, 69, 66, 22, 55]
    },
        {
            name: 'Female',
            data: [10, 30, 40, 20, 50, 60, 30, 34, 54,66, 22, 33]
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
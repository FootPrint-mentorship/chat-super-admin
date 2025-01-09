import type { ApexOptions } from 'apexcharts';
import {Chart} from "@/util";


export const MaritalStatusChart = ({screen}:{screen: boolean}) => {

    const options: ApexOptions = {
        chart: {
            width: 380,
        },
        title: {

            text: screen ? 'Beneficiary By Marital Status' : undefined,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    /* chart: {
                      width: 200,
                    },*/
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        colors: ["#134611","#3E8914", "#96E072" ,"#E8FCCF"],
        labels: ["Single","Married","Divorced"],
        legend: {
            position: 'bottom',
            fontSize: '10px',
            fontWeight: 400,
            show: true,
        },
    };

    // const series = [20,40,50];
    return (
        // <div
        //     className={'w-full'}
        // >
        //     <div className={'flex flex-col w-full bg-white p-8 rounded-lg shadow-sm'}>

                <Chart
                    options={options}
                    series={[20,40,50]}
                    type="donut"
                    height={350}
                />


        //     </div>
        // </div>
    )
        ;
};
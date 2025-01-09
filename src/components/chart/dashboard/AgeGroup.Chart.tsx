import type { ApexOptions } from 'apexcharts';
import {Chart} from "@/util";

interface AgeGroupChartProps {
    screen: boolean
}

export const AgeGroupChart = ({screen}: AgeGroupChartProps) => {

    const options: ApexOptions = {
        chart: {
            width: 380,
        },
        title: {
            text: screen ? "Age Group" : undefined,
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
        labels: ["18-29","30-41", "42-53", "54-65", "66~"],
        legend: {
            position: 'bottom',
            fontSize: '10px',
            fontWeight: 400,
            show: true,
        },
    };

    const series = [20,40,50,60,70];
    return (
        <div className={'w-full'}>
            <div className={'hidden md:flex'}>

                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height={350}
                />


            </div>
            <div className={'md:hidden flex flex-col w-full bg-white p-8 rounded-lg shadow-sm'}>

                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    height={350}
                />


            </div>
        </div>
    )
        ;
};
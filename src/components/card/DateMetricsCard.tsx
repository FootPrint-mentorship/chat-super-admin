import React from 'react';

function DateMetricsCard() {
    return (
        <div className={`relative p-5 rounded-lg shadow-sm bg-white border-none flex flex-col gap-4`}>
            <h4 className={'text-lg text-[#333333] font-bold'}>Metrics</h4>
            <div className={'flex flex-col gap-4'}>
                {

                        [1, 32, 3, 4,].map((item, index) => (
                            <div key={index} className={'text-sm text-[#646A86]  font-normal'}>
                                <p className={'text-xs'}>Maximum Disbursement Date</p>
                                <p className={'text-sm text-[#25396F] font-bold'}>12/04/2020</p>
                            </div>
                        ))

                }
            </div>
        </div>
    );
}

export default DateMetricsCard;
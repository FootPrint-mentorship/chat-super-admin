import React from 'react';

function VendorMetricsCard() {
    return (
        <div className={`relative p-5 rounded-lg shadow-sm bg-white border-none flex flex-col gap-4`}>
            <h4 className={'text-lg text-[#333333] font-bold'}>Vendors</h4>
            <div className={'mb-16 sm:mb-20 flex flex-col gap-4'}>
                {
                        [1, 32, 3, 4,].map((item, index) => (
                            <div key={index}
                                className={'text-sm text-[#646A86] flex justify-between items-center w-full font-normal'}>
                                <p>Dangote Flour Mill</p>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24"
                                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="1"/>
                                    <circle cx="12" cy="19" r="1"/>
                                    <circle cx="12" cy="5" r="1"/>
                                </svg>


                            </div>
                        ))

                }
            </div>
            <div className={'flex items-center justify-between absolute bottom-5 pr-8 w-full '}>


                <div className={'flex items-center gap-2'}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1666 6.27915C12.6266 3.85915 10.3733 2.46582 7.99992 2.46582C6.81325 2.46582 5.65992 2.81249 4.60659 3.45915C3.55325 4.11249 2.60659 5.06582 1.83325 6.27915C1.16659 7.32582 1.16659 9.02582 1.83325 10.0725C3.37325 12.4992 5.62659 13.8858 7.99992 13.8858C9.18659 13.8858 10.3399 13.5392 11.3933 12.8925C12.4466 12.2392 13.3933 11.2858 14.1666 10.0725C14.8333 9.03249 14.8333 7.32582 14.1666 6.27915ZM7.99992 10.8725C6.50659 10.8725 5.30659 9.66582 5.30659 8.17915C5.30659 6.69249 6.50659 5.48582 7.99992 5.48582C9.49325 5.48582 10.6933 6.69249 10.6933 8.17915C10.6933 9.66582 9.49325 10.8725 7.99992 10.8725Z"
                            fill="#17CE89"/>
                        <path
                            d="M8.0001 6.27246C6.95343 6.27246 6.1001 7.12579 6.1001 8.17913C6.1001 9.22579 6.95343 10.0791 8.0001 10.0791C9.04676 10.0791 9.90676 9.22579 9.90676 8.17913C9.90676 7.13246 9.04676 6.27246 8.0001 6.27246Z"
                            fill="#17CE89"/>
                    </svg>

                    <p className={'underline text-sm text-[#17CE89]'}>View All</p>

                </div>
                <div className={'flex items-center gap-4 '}>


                    <p> 1 - 5 of 24</p>

                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.02808 10.4653L2.2813 6.18171L6.02808 1.89814L5.27872 0.184711L0.0332265 6.18171L5.27872 12.1787L6.02808 10.4653Z"
                            fill="#707FA3"/>
                    </svg>

                    <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.0126953 10.4653L3.75948 6.18171L0.0126953 1.89814L0.762052 0.184711L6.00754 6.18171L0.762052 12.1787L0.0126953 10.4653Z"
                            fill="#707FA3"/>
                    </svg>

                </div>
            </div>
        </div>
    );
}

export default VendorMetricsCard;
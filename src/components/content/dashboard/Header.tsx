import React from 'react';

interface DashHeaderProps {
    userName: string;
    type: string;
    showMap: boolean;
    toggleMap: () => void;
}

function Header({userName,toggleMap,showMap,type}: DashHeaderProps) {
    return (
        <div className="flex items-center justify-between  py-4">
            {/* Greeting */}
            <h1 className="text-lg font-normal text-[#25396F]">Hi, <span className={'text-lg font-bold'} >{userName}</span> </h1>

            <div className="flex items-center gap-4">

                {/* Overview Dropdown */}
                <div className={'relative'}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg fill="none" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#202B3C">
                                <path
                                    d="m17.5401 8.81063c1.6347 0 2.96-1.32524 2.96-2.96001 0-1.63476-1.3253-2.96-2.96-2.96-1.6348 0-2.96 1.32524-2.96 2.96 0 1.63477 1.3252 2.96001 2.96 2.96001z"/>
                                <path
                                    d="m6.46 8.81063c1.63476 0 2.96-1.32524 2.96-2.96001 0-1.63476-1.32524-2.96-2.96-2.96s-2.96 1.32524-2.96 2.96c0 1.63477 1.32524 2.96001 2.96 2.96001z"/>
                                <path
                                    d="m17.5401 21.1114c1.6347 0 2.96-1.3252 2.96-2.96s-1.3253-2.96-2.96-2.96c-1.6348 0-2.96 1.3252-2.96 2.96s1.3252 2.96 2.96 2.96z"/>
                                <path
                                    d="m6.46 21.1114c1.63476 0 2.96-1.3252 2.96-2.96s-1.32524-2.96-2.96-2.96-2.96 1.3252-2.96 2.96 1.32524 2.96 2.96 2.96z"/>
                            </g>
                        </svg>
                    </div>
                        <select
                            className="bg-[#F5F6F8] border-none  ps-6 rounded-md py-2 px-4 text-[#25396F] text-[10px] focus:ring-2 focus:ring-green-500"
                            defaultValue="General Overview"
                        >
                            <option>General Overview</option>
                            <option>Project Overview</option>
                            <option>Financial Overview</option>
                        </select>
                    </div>
                {/* End Overview Dropdown */}


                    {/* Search Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-3 h-3 text-[#646A86] dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>

                        <input type="search" id="default-search"
                               className="block w-full py-2 ps-8 px-4 text-xs text-gray-900 bg-[#F5F6F8] border-none rounded-lg"
                               placeholder="Search location" required/>

                    </div>
                {/* End Search Input */}

                <button onClick={toggleMap} className={'relative text-[10px] py-2 ps-8 px-4 text-[#25396F] bg-[#F5F6F8] border-none rounded-lg'}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg width="12" height="12" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    {showMap && type === "normal" ? "Switch to 3D View" : showMap && type !== "normal" ? "Hide Map" : "View Map"}
                </button>

            </div>
        </div>
);
}

export default Header;
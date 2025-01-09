import React from 'react';

interface ArchiveProjectsModalProps {
    onClose: () => void;
    project_name?: string | undefined;
    open: boolean;
}

function ImportSelect({onClose,project_name, open}: ArchiveProjectsModalProps) {
    if(!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black bg-opacity-80 z-50">

            <div className="bg-white py-2 pb-4 rounded-lg shadow-md w-full max-w-lg">
                <div className={'flex items-center justify-end w-full px-2'}>
                    <svg onClick={onClose} className={'w-[20px] h-[20px] cursor-pointer'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                        <path
                            d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                            fill="#231f20"/>
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Select Import Destination</h2>

                <div className="flex px-8">
                    <p className={'text-left text-primaryTextColor font-medium'}>Choose preferred import destination.</p>

                </div>

                <div className="flex gap-2 bg-white py-2 pb-4 rounded-lg shadow-md">

                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="15" fill="#53A6EB"/>
                        <path
                            d="M39.5523 16.0775L22.667 22.1069V31.4402L23.6643 31.7962L22.1617 34.8015C21.9905 35.1432 21.8948 35.5177 21.8811 35.8995C21.8674 36.2814 21.9359 36.6618 22.0821 37.0149C22.2283 37.3679 22.4487 37.6854 22.7284 37.9459C23.008 38.2063 23.3404 38.4035 23.703 38.5242L29.1483 40.3389C29.7575 40.5374 30.4175 40.5118 31.0094 40.2666C31.6013 40.0214 32.0861 39.5727 32.3763 39.0015L34.1137 35.5268L39.5523 37.4695C39.7534 37.5413 39.9688 37.5637 40.1804 37.5348C40.392 37.506 40.5935 37.4267 40.7681 37.3038C40.9427 37.1808 41.0852 37.0177 41.1836 36.8282C41.282 36.6387 41.3335 36.4284 41.3337 36.2148V17.3322C41.3335 17.1187 41.282 16.9083 41.1836 16.7188C41.0852 16.5293 40.9427 16.3662 40.7681 16.2433C40.5935 16.1203 40.392 16.0411 40.1804 16.0122C39.9688 15.9834 39.7534 16.0058 39.5523 16.0775ZM29.991 37.8095L24.547 35.9949L26.1937 32.7002L31.583 34.6255L29.991 37.8095ZM17.3337 31.4402H20.0003V22.1069H17.3337C15.863 22.1069 14.667 23.3029 14.667 24.7735V28.7735C14.667 30.2442 15.863 31.4402 17.3337 31.4402Z"
                            fill="white"/>
                    </svg>

                    <div>
                        <h4>Import from existing Project</h4>
                        <p>Import beneficiaries from existing Project</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ImportSelect;
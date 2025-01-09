import React from "react";
import Select from "@/components/select";
import Input from "@/components/input";

const CashProjectFormModal = ({ isOpen, onClose }: { isOpen: "item" | "cash" | undefined; onClose: () => void }) => {
    if (!isOpen) return null;

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
                <h2 className="text-xl font-semibold mb-6 text-center">New Cash Project </h2>
                <form className="flex flex-col gap-2 px-6 h-[600px]  overflow-x-hidden">
                    {/* Project Name */}
                    <div>
                        <label className="block text-sm font-medium">Project Name</label>
                        <Input
                            variant={'outlined'}
                            type="text"
                            placeholder="Enter name of Project"
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            placeholder="Short description"
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">SDG</label>
                        <Select
                            placeholder={'-Select-'} variant={'outlined'} options={[]} size={'md'} className={'w-full'}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Budget</label>
                        <Input
                            type={'number'}
                            placeholder={'0.00'}
                            className="w-full mt-1 p-2  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Total Target Beneficiaries</label>
                        <Input
                            type={'number'} placeholder={'0.00'}

                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Start date</label>
                        <Input
                            variant={'outlined'}
                            type="text"
                            placeholder="Enter name of Project"
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className={'w-full'}>
                        <label className="block text-sm font-medium">Country</label>
                        <Select
                            className={'w-full border-primary'}
                            placeholder={'-Select-'} variant={'outlined'} options={[]} size={'md'}/>

                    </div>

                    <div className={'w-full'}>
                        <label className="block text-sm font-medium">State</label>
                        <Select
                            className={'w-full border-primary'}
                            placeholder={'-Select-'} variant={'outlined'} options={[]} size={'md'}/>
                        <span className={'text-primaryTextColor text-[10px]'}>You can add multiple states/regions</span>
                    </div>

                    <div className={'flex items-center justify-start gap-2 mt-4'}>
                        <svg width={'15px'} height={'15px'} viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m172.268 501.67c-145.298-210.639-172.268-232.257-172.268-309.67 0-106.039 85.961-192 192-192s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zm19.732-229.67c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                fill={'#17CE89'}/>
                        </svg>
                        <p className={'underline text-secondaryBgColor text-xs'}>Search Location on map</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8">

                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-[#17CE89] text-white rounded-md hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 w-full bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashProjectFormModal;

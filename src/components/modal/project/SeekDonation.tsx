import React from 'react';
import Input from "@/components/input";

function SeekDonation({isOpen, onClose}: { isOpen: string | undefined | boolean; onClose: () => void }) {
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
                <h2 className="text-xl font-semibold mb-6 text-center">Seek Donation</h2>
                <form className="flex flex-col gap-4 px-6 overflow-x-hidden">
                    {/* Project Name */}
                    <div>
                        <label className="block text-sm font-medium">Amount Budgeted</label>
                        <Input
                            variant={'outlined'}
                            type="number"
                            placeholder="5,000,000"
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium">Amount Raised</label>
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
                        <label className="block text-sm font-medium">Amount Needed</label>
                        <Input
                            variant={'outlined'}
                            type="number"
                            placeholder=""
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium">Donation Closing Date</label>
                        <Input
                            variant={'outlined'}
                            type="date"
                            placeholder=""
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>


                    {/* Buttons */}
                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8">

                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-[#17CE89] text-white rounded-md hover:bg-blue-700"
                        >
                            Seek Donation
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 w-full bg-white text-primary rounded-md border border-borderColor"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default SeekDonation;
import React from "react";

interface ItemProjectFormProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen?: boolean;
    onClose: () => void
}


const SetCriteria = ({ isOpen, onClose }: ItemProjectFormProps) => {
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
                <h2 className="text-xl font-semibold mb-6 text-center">Set Criteria</h2>
                <div className="flex justify-left px-8">
                    <p className={'text-left text-[#646A86] font-normal'}>This is used to set the criteria for cash distribution.</p>

                </div>

                <div className={'flex flex-col gap-4 w-full mt-4 px-8'}>

                    <div className="flex gap-2">
                        <div className="flex items-center h-5">
                            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value=""
                                   className="w-4 h-4 text-secondaryBgColor bg-[#F6F6F8] border-[#E1E7EC] focus:ring-secondaryBgColor focus:ring-2"/>
                        </div>
                        <div className="text-sm -mt-1">
                            <label className="font-medium text-primary text-lg ">Split Fund equally</label>
                            <p id="helper-radio-text" className="text-sm font-normal text-[#A4A7BC]">
                                this allows for funded amount to be split equally to all <br/> Beneficiaries</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex items-center h-5">
                            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                        <div className="ms-2 text-sm -mt-1">
                            <label  className="font-medium text-primary text-lg">Split Funding Unequally</label>
                            <p id="helper-radio-text" className="text-sm font-normal text-[#A4A7BC]">this allows for funded amount to be split based on the <br/> criteria met by Beneficiaries</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8">

                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-secondaryBgColor text-white rounded-md"
                        >
                            Create
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 w-full bg-inherit border-2 border-solid border-divider rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SetCriteria;

import React from 'react';

function FundingConfirmation({ isOpen, onClose, setLoading}: {isOpen: boolean, onClose: () => void, setLoading: React.Dispatch<React.SetStateAction<boolean>>}) {

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black bg-opacity-80 z-50">
            <div className="bg-white py-2 px-4 pb-4 rounded-lg shadow-md w-full max-w-lg">
                <div className={'flex items-center justify-end w-full px-2'}>
                    <svg onClick={onClose} className={'w-[20px] h-[20px] cursor-pointer'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                        <path
                            d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                            fill="#25396F"/>
                    </svg>
                </div>
                <h2 className="text-xl font-semibold mb-6 text-center">Fund Project</h2>

                <div className="flex justify-start mb-4">
                    <p className={'text-left text-primaryTextColor font-bold'}>
                        You&#39;re about to fund the <span
                        className={'text-primary  font-bold'}>Feed the Poor project</span>
                    </p>

                </div>

                <div className={'bg-[#FAFAFA] flex items-center  py-2 px-4 pb-4 rounded-lg  w-full max-w-lg'}>
                    <p className={'text-primary'}>Amount Funded <span className={'text-primary font-bold'}>$12,560,800.00</span></p>
                </div>

                <div>
                    <h2 className="text-[16px] tracking-wide mt-4 mb-2 font-normal text-left">Funding Details</h2>

                    <div className={'flex items-center gap-8 justify-around py-4 px-2 pb-4 rounded-lg border border-primaryTextColor border-dashed w-full max-w-lg'}>
                        <div className={''}>
                            <h4 className={'text-primaryTextColor text-sm'}>PROJECT NAME</h4>
                            <p className={'text-primary font-bold'}>Feed the Poor</p>
                        </div>
                        <div>
                            <h4 className={'text-primaryTextColor text-sm'}>Date</h4>
                            <p className={'text-primary font-bold'}>2023-04-06 | 16:19:41</p>
                        </div>
                    </div>

                    <div className={'p-2 bg-[#FFFDED] mt-8 rounded-lg flex gap-2 items-center'}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.66675 15.9989C2.66675 8.64019 8.64008 2.66553 16.0001 2.66553C23.3734 2.66553 29.3334 8.64019 29.3334 15.9989C29.3334 23.3602 23.3734 29.3322 16.0001 29.3322C8.64008 29.3322 2.66675 23.3602 2.66675 15.9989ZM14.8267 10.9455C14.8267 10.3069 15.3601 9.77219 16.0001 9.77219C16.6401 9.77219 17.1601 10.3069 17.1601 10.9455V16.8389C17.1601 17.4802 16.6401 17.9989 16.0001 17.9989C15.3601 17.9989 14.8267 17.4802 14.8267 16.8389V10.9455ZM16.0134 22.2402C15.3601 22.2402 14.8401 21.7069 14.8401 21.0669C14.8401 20.4269 15.3601 19.9069 16.0001 19.9069C16.6534 19.9069 17.1734 20.4269 17.1734 21.0669C17.1734 21.7069 16.6534 22.2402 16.0134 22.2402Z"
                                  fill="#EAD83E"/>
                        </svg>

                        <p className={'text-[#3D3704]'}>Please review the details carefully before proceeding.</p>
                    </div>
                </div>

                <div className="flex justify-center gap-4 flex-col md:flex-row mt-8 px-8">

                    <button
                        onClick={()=>{
                            setLoading(true);
                            onClose()
                        }}
                        type="submit"
                        className="px-4 py-2 w-full bg-secondaryBgColor text-white rounded-md font-bold"
                    >
                        Confirm
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 w-full text-primary bg-['inherit'] border-borderColor border-2 rounded-md font-bold"
                    >
                        Cancel
                    </button>
                </div>
            </div>

        </div>
    );
}

export default FundingConfirmation;
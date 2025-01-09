import React, {useState} from 'react';
import FundByWalletIcon from "@/components/icon/FundByWalletIcon";
import Input from "@/components/input";
import FundByDonationIcon from "@/components/icon/FundByDonationIcon";

function FundingMethodModal({ isOpen, onClose, setConfirm}: {isOpen: string | undefined | boolean, onClose: () => void, setConfirm: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [fundWallet, setFundWallet] = useState(0.00);
    const [fundDonation, setFundDonation] = useState(0.00);



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
                            fill="#231f20"/>
                    </svg>
                </div>
                <h2 className="text-xl font-semibold mb-6 text-left">Fund Project</h2>

                <div className="flex justify-start mb-4">
                    <p className={'text-left text-primaryTextColor font-medium'}>
                        Choose preferred funding method.
                    </p>

                </div>


                <div className="bg-white cursor-pointer py-2 px-4 pb-4 rounded-lg shadow w-full max-w-lg flex justify-between items-center">

                    <div className={'flex items-center gap-2'}>
                        <FundByWalletIcon/>
                        <div className={''}>
                            <h4 className={'text-[#333333] text-sm font-bold'}>Fund from wallet balance</h4>
                            <p className={'text-[#555555] text-xs font-normal'}>Wallet balance: <span className={'text-primary'}>$12,560,800.00</span></p>
                        </div>
                        </div>

                        <Input
                            variant={'outlined'}
                            type="number"
                            value={fundWallet}
                            size={'md'}
                            onChange={(e)=>{
                                setFundWallet(e.target.value as unknown as number);
                            }}
                            placeholder="0.00"
                            className=" mt-1 p-2 border w-[100px] bg-[#F5F6F8]  border-[#99999980] rounded-md "
                        />

                    </div>


                    <div className="bg-white cursor-pointer py-2 px-4 mt-8 pb-4 rounded-lg shadow w-full max-w-lg flex justify-between items-center">

                    <div className={'flex items-center gap-2'}>
                        <FundByDonationIcon/>
                        <div className={''}>
                            <h4 className={'text-[#333333] text-sm font-bold'}>Fund from Donations</h4>
                            <p className={'text-[#555555] text-xs font-normal'}>Amount Donated: <span className={'text-primary'}>$560,800.00</span>
                            </p>
                        </div>
                    </div>

                    <Input
                        variant={'outlined'}
                        type="number"
                        value={fundDonation}
                        onChange={(e)=>{
                            setFundDonation(e.target.value as unknown as number);
                        }}
                        placeholder="Enter name of Project"
                        className=" mt-1 p-2 w-[100px] border bg-[#F5F6F8]  border-[#99999980] rounded-md "
                    />

                </div>

                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8 px-8">

                        <button

                            onClick={()=>{
                                onClose();
                                setConfirm(true)

                            }}
                            type="submit"
                            className="px-4 py-2 w-full bg-secondaryBgColor text-white rounded-md font-bold"
                        >
                            Processed
                        </button>

                    </div>
                </div>
            </div>
            );
            }

            export default FundingMethodModal;
import React from 'react';
import Input from "@/components/input";

function InviteDonorModal({isOpen, onClose}:{isOpen: string | undefined | boolean, onClose:() => void}) {

    if(!isOpen){
        return
    }


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
                <h2 className="text-xl font-semibold mb-6 text-center">Invite donor to Project</h2>
                <div className="flex justify-center px-8">
                    <p className={'text-center text-primaryTextColor font-medium'}> Add donor emails you want to invite
                        to this <br/> Project. The campaign is set as private, only <br/> invited donors will have
                        access.
                    </p>

                </div>

                <form className="flex flex-col gap-6 px-6 overflow-x-hidden">
                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium">Email Address</label>
                        <Input
                            variant={'outlined'}
                            type="text"
                            placeholder="Enter name of Project"
                            className="w-full mt-1 p-2 border  border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium">Message (Optional)</label>
                        <textarea
                            placeholder="Enter product or service name"
                            className="w-full mt-1 p-2 border  border-primary rounded-md"
                        ></textarea>
                    </div>


                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8 px-8">

                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-secondaryBgColor text-white rounded-md font-bold"
                        >
                            Send Invite
                        </button>

                    </div>

                </form>


            </div>


        </div>
    );
}

export default InviteDonorModal;
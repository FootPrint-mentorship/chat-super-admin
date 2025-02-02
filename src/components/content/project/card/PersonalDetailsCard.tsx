import React from 'react';

type PersonalDetails = {
    imageUrl: string;
    name: string;
    id: string;
    phoneNumber: string;
   location: string;
    email: string;
    created: string;
    status: string;
};

const PersonalDetailsCard: React.FC<PersonalDetails> = ({   imageUrl,
                                                            name,
                                                            id,
                                                            phoneNumber,
                                                            email,
                                                            created,
                                                            status,
                                                          
                                                        }) => {
    return (
        <div className=" bg-white p-6 rounded-lg shadow-md w-[392px] h-[615px]">
                <h2 className="text-lg text-center font-semibold text-primary mb-4">Personal Details</h2>
            <div className={'border border-secondaryBgColor rounded-md p-6'}>

                <div className="flex justify-center mb-6">
                    <img
                        src={imageUrl}
                        
                        className="w-24 h-24 rounded-full object-cover border-2 border-green-500"
                    />
                </div>
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800 ">{name}</p>
                    <p className="text-sm text-gray-600">ID: {id}</p>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between bg-[#FAFAFA] p-4 rounded-full">
                        <span className="text-gray-500 ">Phone number:</span>
                        <span className="text-gray-700 h-[1px]">{phoneNumber}</span>
                    </div>
                    <div className="flex justify-between bg-[#FAFAFA] p-4 rounded-full">
                        <span className="text-gray-500">Email address:</span>
                        <span className="text-gray-700">{email}</span>
                    </div>
                    <div className="flex justify-between bg-[#FAFAFA] p-4 rounded-full">
                        <span className="text-gray-500">Created:</span>
                        <span className="text-gray-700">{created}</span>
                    </div>
                    <div className="flex justify-between bg-[#FAFAFA] p-4 rounded-full">
                        <span className="text-gray-500">Status:</span>
                        <span
                            className={`${
                                status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
                            } font-semibold`}
                        >
            {status}
          </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PersonalDetailsCard;

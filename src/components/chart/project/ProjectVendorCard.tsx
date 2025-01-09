import React from 'react';

function ProjectVendorCard({}) {
    return (
        <div className={'shadow-md rounded-md p-4 flex flex-col gap-6'}>
            <h4 className="text-sm text-primary font-bold mb-2">Project Vendors (12)</h4>
            <div className="w-full bg-gray-50 p-4 rounded-lg border border-[#53DB92] ">
                <div className={'flex flex-col gap-4'}>
                    <p className={'text-primaryTextColor text-xs'}>Janet Woodpecker</p>
                    <p className={'text-primaryTextColor text-xs'}>John Doe</p>
                    <p className={'text-primaryTextColor text-xs'}>Brian Armstrong</p>
                    <p className={'text-primaryTextColor text-xs'}>Femi Awosanya</p>
                    <p className={'text-primaryTextColor text-xs'}>Danny Walter</p>
                </div>

                <button className="text-secondaryBgColor underline text-xs mt-4">View</button>

            </div>
        </div>
    );
}

export default ProjectVendorCard;
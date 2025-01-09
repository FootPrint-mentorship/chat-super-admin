import React from 'react';


interface LightButtonProps {
    value: string
}


function LightButton({value}: LightButtonProps) {
    return (
        <button type="button" className="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{value}</button>

    );
}

export default LightButton;
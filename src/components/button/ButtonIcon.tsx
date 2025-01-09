import React from 'react';

interface ButtonIconProps {
    icon: React.ReactNode;
    value: string
}

function ButtonIcon({icon}: ButtonIconProps) {
    return (
        <>
            <button type="button"
                    className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-[#17CE89]  rounded-lg text-center">
                {icon}
                Extra large
            </button>
        </>
    );
}

export default ButtonIcon;


export function ButtonIconNOBg({icon}: ButtonIconProps) {
    return (
        <>
            <button type="button"
                    className="px-6 py-3.5 text-base font-medium border-2 border-solid border-[#17CE89] text-white inline-flex items-center bg-[#fff]  rounded-lg text-center">
                {icon}
                Extra large
            </button>
        </>
    );
}


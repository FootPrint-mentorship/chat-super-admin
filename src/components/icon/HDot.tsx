import React from 'react';

function HDot({height, width}: {height?: string, width?: string}  ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical cursor-pointer" width={width ? width :"24"}
             height={height ? height : "24"} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="12" cy="19" r="1"/>
            <circle cx="12" cy="5" r="1"/>
        </svg>
    );
}

export default HDot;
import React from 'react';

function ArrowDownIcon({height, width, fill}: {height: string; width: string, fill: string}) {
    return (
        <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
            <path
                d="m17.9188 8.17969h-6.23-5.61003c-.96 0-1.44 1.16-.76 1.84001l5.18003 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68001.19-1.84001-.77-1.84001z"
                fill={fill}/>
        </svg>
    );
}

export default ArrowDownIcon;
import React from 'react';

function ArrowUpIcon({height, width, fill}: {height: string; width: string, fill: string}) {
    return (
        <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
            <path
                d="m18.6806 13.9783-3.21-3.21-1.96-1.97002c-.83-.83-2.18-.83-3.01 0l-5.18004 5.18002c-.68.68-.19 1.84.76 1.84h5.61004 6.23c.96 0 1.44-1.16.76-1.84z"
                fill={fill}/>
        </svg>
    );
}

export default ArrowUpIcon;
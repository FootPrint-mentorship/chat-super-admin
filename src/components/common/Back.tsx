import React from 'react';
import Link from "next/link";

function Back({link}: {link: string}) {
    return (
        <Link href={link}>
            <div className="flex items-center gap-2 cursor-pointer">
                <svg width={'24px'} height={'24px'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(0 1 -1 0 24 0)"/>
                    <path
                        d="m22 12a10 10 0 1 0 -10 10 10 10 0 0 0 10-10zm-11.86 3.69-2.86-3a.49.49 0 0 1 -.1-.15.54.54 0 0 1 -.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42l-1.3 1.29h5.59a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1 -1.45 1.38z"
                        fill="#707FA3"/>
                </svg>
                <button className="text-primaryTextColor text-sm">Go Back</button>
            </div>
        </Link>
    );
}

export default Back;
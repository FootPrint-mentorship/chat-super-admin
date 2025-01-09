import React, { useState } from 'react';
import Link from "next/link";

const NotificationDropdown = ({setIsOpen}:{setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg w-full">
            <div className={'w-full flex justify-end items-center'}>
                <svg onClick={()=>{
                    setIsOpen(false);
                }} height={'25px'} width={'25px'} className={'mb-4 cursor-pointer'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                    <path
                        d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                        fill="#231f20"/>
                </svg>
            </div>
            <div className="flex justify-between items-center mb-4 px-4">
                <h2 className="text-lg font-semibold">Notification</h2>
                <button className="text-green-500 text-sm font-medium underline">Mark All As Read</button>
            </div>
            <ul className={'px-4 h-[500px] overflow-x-hidden'}>
                {Array(9)
                    .fill(null)
                    .map((_, index) => (
                        <li
                            key={index}
                            className="relative border-b py-4 flex items-start justify-between group hover:bg-gray-50"
                        >
                            <div>
                                <div className="flex  space-x-2">
                  <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded p-2 ${
                          index === 0 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}
                  >
                   {index === 0 ?
                       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                               d="M20.1892 14.5618L19.0592 12.6818C18.8092 12.2718 18.5892 11.4818 18.5892 11.0018V9.13176C18.5892 5.50176 15.6392 2.55176 12.0192 2.55176C8.38923 2.56176 5.43923 5.50176 5.43923 9.13176V10.9918C5.43923 11.4718 5.21923 12.2618 4.97923 12.6718L3.84923 14.5518C3.41923 15.2818 3.31923 16.1118 3.58923 16.8318C3.85923 17.5618 4.46923 18.1418 5.26923 18.4018C6.34923 18.7618 7.43923 19.0218 8.54923 19.2118C8.65923 19.2318 8.76923 19.2418 8.87923 19.2618C9.01923 19.2818 9.16923 19.3018 9.31923 19.3218C9.57923 19.3618 9.83923 19.3918 10.1092 19.4118C10.7392 19.4718 11.3792 19.5018 12.0192 19.5018C12.6492 19.5018 13.2792 19.4718 13.8992 19.4118C14.1292 19.3918 14.3592 19.3718 14.5792 19.3418C14.7592 19.3218 14.9392 19.3018 15.1192 19.2718C15.2292 19.2618 15.3392 19.2418 15.4492 19.2218C16.5692 19.0418 17.6792 18.7618 18.7592 18.4018C19.5292 18.1418 20.1192 17.5618 20.3992 16.8218C20.6792 16.0718 20.5992 15.2518 20.1892 14.5618ZM12.7492 10.5018C12.7492 10.9218 12.4092 11.2618 11.9892 11.2618C11.5692 11.2618 11.2292 10.9218 11.2292 10.5018V7.40176C11.2292 6.98176 11.5692 6.64176 11.9892 6.64176C12.4092 6.64176 12.7492 6.98176 12.7492 7.40176V10.5018Z"
                               fill="#17CE89"/>
                           <path
                               d="M14.8297 20.512C14.4097 21.672 13.2997 22.502 11.9997 22.502C11.2097 22.502 10.4297 22.182 9.87969 21.612C9.55969 21.312 9.31969 20.912 9.17969 20.502C9.30969 20.522 9.43969 20.532 9.57969 20.552C9.80969 20.582 10.0497 20.612 10.2897 20.632C10.8597 20.682 11.4397 20.712 12.0197 20.712C12.5897 20.712 13.1597 20.682 13.7197 20.632C13.9297 20.612 14.1397 20.602 14.3397 20.572C14.4997 20.552 14.6597 20.532 14.8297 20.512Z"
                               fill="#17CE89"/>
                       </svg> :
                       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                               d="M20.1892 14.5618L19.0592 12.6818C18.8092 12.2718 18.5892 11.4818 18.5892 11.0018V9.13176C18.5892 5.50176 15.6392 2.55176 12.0192 2.55176C8.38923 2.56176 5.43923 5.50176 5.43923 9.13176V10.9918C5.43923 11.4718 5.21923 12.2618 4.97923 12.6718L3.84923 14.5518C3.41923 15.2818 3.31923 16.1118 3.58923 16.8318C3.85923 17.5618 4.46923 18.1418 5.26923 18.4018C6.34923 18.7618 7.43923 19.0218 8.54923 19.2118C8.65923 19.2318 8.76923 19.2418 8.87923 19.2618C9.01923 19.2818 9.16923 19.3018 9.31923 19.3218C9.57923 19.3618 9.83923 19.3918 10.1092 19.4118C10.7392 19.4718 11.3792 19.5018 12.0192 19.5018C12.6492 19.5018 13.2792 19.4718 13.8992 19.4118C14.1292 19.3918 14.3592 19.3718 14.5792 19.3418C14.7592 19.3218 14.9392 19.3018 15.1192 19.2718C15.2292 19.2618 15.3392 19.2418 15.4492 19.2218C16.5692 19.0418 17.6792 18.7618 18.7592 18.4018C19.5292 18.1418 20.1192 17.5618 20.3992 16.8218C20.6792 16.0718 20.5992 15.2518 20.1892 14.5618ZM12.7492 10.5018C12.7492 10.9218 12.4092 11.2618 11.9892 11.2618C11.5692 11.2618 11.2292 10.9218 11.2292 10.5018V7.40176C11.2292 6.98176 11.5692 6.64176 11.9892 6.64176C12.4092 6.64176 12.7492 6.98176 12.7492 7.40176V10.5018Z"
                               fill="#707FA3"/>
                           <path
                               d="M14.8297 20.512C14.4097 21.672 13.2997 22.502 11.9997 22.502C11.2097 22.502 10.4297 22.182 9.87969 21.612C9.55969 21.312 9.31969 20.912 9.17969 20.502C9.30969 20.522 9.43969 20.532 9.57969 20.552C9.80969 20.582 10.0497 20.612 10.2897 20.632C10.8597 20.682 11.4397 20.712 12.0197 20.712C12.5897 20.712 13.1597 20.682 13.7197 20.632C13.9297 20.612 14.1397 20.602 14.3397 20.572C14.4997 20.552 14.6597 20.532 14.8297 20.512Z"
                               fill="#707FA3"/>
                       </svg>
                   }

                  </span>
                                    <div className={'flex flex-col gap-2'}>
                                        <div className={'flex items-center gap-2'}>
                                            <span className="text-sm font-medium">Notification Title</span>
                                            {index === 0 && (
                                                <span
                                                    className="text-green-500 text-xs ml-2 bg-green-100 rounded px-2">New</span>
                                            )}
                                        </div>
                                        <p className="text-gray-500 text-sm mt-1">Short description of the
                                            notification.</p>
                                        <span className="text-gray-400 text-xs">May 20 at 04:02 am</span>
                                    </div>

                                </div>

                            </div>
                            <button
                                className="absolute right-0 top-0 p-2"
                                onClick={() => toggleDropdown(index)}
                            >
                                <svg enable-background="new 0 0 92 92" height="20" viewBox="0 0 92 92" width="20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m21 53c-1.8 0-3.7-.8-5-2.1s-2-3.1-2-4.9.8-3.6 2-5c1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9s-3.1 2.1-4.9 2.1zm29.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm25 0c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z" fill={'#707FA3'}/>
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="absolute right-8 top-4 bg-white border rounded shadow-lg text-sm">
                                    <button className="block px-4 py-2 hover:bg-gray-100">Mark as Read</button>
                                    <button className="block px-4 py-2 text-red-500 hover:bg-red-50">Delete</button>
                                </div>
                            )}
                        </li>
                    ))}
            </ul>
            <Link href={'/notification'}>
                <button className="text-green-500 mt-4 underline block text-center w-full">View All Notification
                </button>
            </Link>
        </div>
    );
};

export default NotificationDropdown;

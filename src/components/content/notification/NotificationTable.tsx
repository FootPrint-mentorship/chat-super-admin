import React from 'react';
import {Notification} from "@/types/notification";
import {Pagination} from "@/components/pagination";

interface Props {
    filteredNotifications: Notification[];
}

function NotificationTable({filteredNotifications}: Props) {
    return (
        <div className={'shadow-md hidden lg:flex flex-col sm:rounded-lg bg-white w-full mb-10'}>
            {/* Table */}
            <table
                className="min-w-full bg-white text-sm text-left text-gray-500 border-none">
                <thead className="text-xs border-solid text-gray-700 uppercase bg-[#F7F7F7]">
                <tr className={'border-solid'}>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                </tr>
                </thead>
                <tbody>
                {filteredNotifications.map((notification, index) => (
                    <tr
                        key={index}
                        className=""
                        style={{
                            backgroundColor: notification.status === 'Unread' ? 'white' : 'white',
                        }}
                    >
                        <td className="px-6 py-4">
                               <span
                                   className={`inline-flex h-8 w-8 items-center justify-center rounded p-2 ${
                                       notification.type === 'alert' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                   }`}
                               >
                            {notification.type === 'alert' ?
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.1892 14.5618L19.0592 12.6818C18.8092 12.2718 18.5892 11.4818 18.5892 11.0018V9.13176C18.5892 5.50176 15.6392 2.55176 12.0192 2.55176C8.38923 2.56176 5.43923 5.50176 5.43923 9.13176V10.9918C5.43923 11.4718 5.21923 12.2618 4.97923 12.6718L3.84923 14.5518C3.41923 15.2818 3.31923 16.1118 3.58923 16.8318C3.85923 17.5618 4.46923 18.1418 5.26923 18.4018C6.34923 18.7618 7.43923 19.0218 8.54923 19.2118C8.65923 19.2318 8.76923 19.2418 8.87923 19.2618C9.01923 19.2818 9.16923 19.3018 9.31923 19.3218C9.57923 19.3618 9.83923 19.3918 10.1092 19.4118C10.7392 19.4718 11.3792 19.5018 12.0192 19.5018C12.6492 19.5018 13.2792 19.4718 13.8992 19.4118C14.1292 19.3918 14.3592 19.3718 14.5792 19.3418C14.7592 19.3218 14.9392 19.3018 15.1192 19.2718C15.2292 19.2618 15.3392 19.2418 15.4492 19.2218C16.5692 19.0418 17.6792 18.7618 18.7592 18.4018C19.5292 18.1418 20.1192 17.5618 20.3992 16.8218C20.6792 16.0718 20.5992 15.2518 20.1892 14.5618ZM12.7492 10.5018C12.7492 10.9218 12.4092 11.2618 11.9892 11.2618C11.5692 11.2618 11.2292 10.9218 11.2292 10.5018V7.40176C11.2292 6.98176 11.5692 6.64176 11.9892 6.64176C12.4092 6.64176 12.7492 6.98176 12.7492 7.40176V10.5018Z"
                                        fill="#17CE89"/>
                                    <path
                                        d="M14.8297 20.512C14.4097 21.672 13.2997 22.502 11.9997 22.502C11.2097 22.502 10.4297 22.182 9.87969 21.612C9.55969 21.312 9.31969 20.912 9.17969 20.502C9.30969 20.522 9.43969 20.532 9.57969 20.552C9.80969 20.582 10.0497 20.612 10.2897 20.632C10.8597 20.682 11.4397 20.712 12.0197 20.712C12.5897 20.712 13.1597 20.682 13.7197 20.632C13.9297 20.612 14.1397 20.602 14.3397 20.572C14.4997 20.552 14.6597 20.532 14.8297 20.512Z"
                                        fill="#17CE89"/>
                                </svg>
                                :

                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m12 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.67 8.38c-.05.13-.12.23-.21.33-.1.09-.21.16-.33.21s-.25.08-.38.08-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33-.05-.12-.08-.25-.08-.38s.03-.26.08-.38.12-.23.21-.33c.1-.09.21-.16.33-.21.24-.1.52-.1.76 0 .12.05.23.12.33.21.09.1.16.21.21.33s.08.25.08.38-.03.26-.08.38z"
                                        fill="#2F80ED"/>
                                </svg>
                            }
                               </span>
                        </td>
                        <td className="px-6 py-4">{notification.date}</td>
                        <td className="px-6 py-4">{notification.title}</td>
                        <td className="px-6 py-4">{notification.description}</td>
                        <td className="px-6 py-4">
                <span
                    className={`${
                        notification.status === 'Unread' ? 'text-[#35C78A]' : 'text-gray-600'
                    }  font-normal text-[10px] ${
                        notification.status === 'Unread' ? 'bg-[#EEFCF6]' : 'bg-[#F5F6F8]'
                    }   rounded-xl px-2 py-1`}
                >
                  {notification.status}
                </span>
                        </td>
                        <td className="px-6 py-4">
                <span
                    className={`text-[#3396FF] underline font-normal text-xs`}
                >
                  Make As Read
                </span>
                        </td>
                        <td className="px-6 py-4">
                <span
                    className={`text-[#E42C66] underline font-normal text-xs`}
                >
                  Delete
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
            {/* Pagination */}
            <Pagination/>

        </div>
    );
}

export default NotificationTable;
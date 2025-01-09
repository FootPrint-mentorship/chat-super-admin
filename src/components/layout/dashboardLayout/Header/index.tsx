import React from 'react';
import Notification from "@/components/layout/dashboardLayout/Header/Notification";
import Messages from "@/components/layout/dashboardLayout/Header/Messages";
import User from "@/components/layout/dashboardLayout/Header/User";
import NotificationDropdown from "@/components/modal/notification/NotificationDropdown";



interface HeaderProps {
onClick: () => void;
    title: string;
}

function Header({title, onClick}: HeaderProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <nav className="relative bg-[#fff] w-full  border-b-2 border-b-divider border-solid">
            <div className=" flex items-center justify-between mx-auto p-4">
                <div className="flex  items-center gap-2">

                    <div onClick={onClick} className="lg:hidden text-center flex items-center justify-center bg-[#17CE89] p-2 cursor-pointer">
                        <svg fill="#fff" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#fff" strokeLinecap="round" strokeWidth="1.5">
                                <path d="m3 7h18"/>
                                <path d="m3 12h18"/>
                                <path d="m3 17h18"/>
                            </g>
                        </svg>
                    </div>
                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap">{title}</h2>
                </div>

                <div className={'flex justify-end items-center gap-6'}>

                    <Messages/>
                    <Notification isOpen={isOpen} setIsOpen={setIsOpen} />
                    <User/>
                </div>

            </div>

            {isOpen && <div className={'absolute top-12 right-[60px] z-20 w-2/5'}>
                <NotificationDropdown setIsOpen={setIsOpen} />
            </div>}
        </nav>

    );
}

export default Header;
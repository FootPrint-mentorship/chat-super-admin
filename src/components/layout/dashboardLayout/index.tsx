import React from 'react';
import Header from "@/components/layout/dashboardLayout/Header";
import Sidebar from "@/components/layout/dashboardLayout/Sidebar";
import Drawer from "@/components/layout/dashboardLayout/Drawer";


interface DashboardProps extends NextComponentWithChildren {
    header?: string;
    title: string;
}



function DashboardLayout({children, title}: DashboardProps) {
    const [open, setOpen] = React.useState(false);

    const openSidebar = () => {
        setOpen(!open);
    }

    return (
        <div className={'relative flex flex-row w-full h-screen'}>
            {open && <Drawer onClick={openSidebar}/>}
            <Sidebar/>
            <div className="flex flex-col w-full">

                <Header title={title} onClick={openSidebar}/>

                <main className={'p-4 h-full overflow-x-hidden'}>{children}</main>

            </div>


        </div>
    );
}

export default DashboardLayout;


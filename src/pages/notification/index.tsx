import React, {ReactNode, useState} from 'react';
import DashboardLayout from "@/components/layout/dashboardLayout";
import Header from "@/components/content/notification/Header";
import NotificationTable from "@/components/content/notification/NotificationTable";
import {allNotifications} from "@/util/mockdata/notification";
import MobileNotificationTable from "@/components/content/notification/MobileNotificationTable";
import {Authenticated} from "@/lib/auth/withAuth";




const NotificationList = () => {
    const [filterType, setFilterType] = useState<string | number>('all');
    const [filterDate, setFilterDate] = useState<string>('all');
    const [search, setSearch] = useState<string>('');


    const filteredNotifications = allNotifications.filter(notification => {
        const filterByType = filterType === 'all' || notification.type === filterType;
        const filterByDate = filterDate === 'all' || notification.date === filterDate;

        return filterByType && filterByDate;
    });

    return (
        <DashboardLayout title={"Notifications"} header={'NGO'}>
            <div className="overflow-x-auto relative ">
               <Header search={search} setSearch={setSearch} filterDate={filterDate} setFilterDate={setFilterDate} filterType={filterType} setFilterType={setFilterType} />
               <NotificationTable filteredNotifications={filteredNotifications} />
                <MobileNotificationTable filteredNotifications={filteredNotifications} />
            </div>
        </DashboardLayout>
    )
        ;
};

NotificationList.getLayout =(page: ReactNode) => {
    return (
        <Authenticated>
            {page}
        </Authenticated>
    );
};


export default (NotificationList);


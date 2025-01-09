import {Notification} from "@/types/notification";


export const allNotifications: Notification[] = [
    {
        type: 'alert',
        date: '2024-05-15',
        title: 'Verification Required',
        description: 'Complete your admin verification to update your profile.',
        status: 'Unread',
    },
    {
        type: 'alert',
        date: '2024-05-14',
        title: 'Donation Received',
        description: 'You have received a donation of $500 from John Doe.',
        status: 'Read',
    },
    {
        type: 'alert',
        date: '2024-05-15',
        title: 'New Feature Released',
        description: 'Check out our new real-time monitoring dashboard.',
        status: 'Read',
    },
    {
        type: 'alert',
        date: '2024-05-15',
        title: 'Project Deadline Alert',
        description: 'The project "Health Initiative" deadline is approaching.',
        status: 'Read',
    },
    {
        type: 'alert',
        date: '2024-05-15',
        title: 'Profile Update Success',
        description: 'Your profile was successfully updated.',
        status: 'Read',
    },
    {
        type: 'info',
        date: '2024-05-15',
        title: 'Funds Disbursed',
        description: '$1000 has been disbursed to "Community Water Project".',
        status: 'Read',
    },
    {
        type: 'info',
        date: '2024-05-15',
        title: 'System Maintenance',
        description: 'Scheduled maintenance on 2024-05-25 from 2 AM to 4 AM.',
        status: 'Unread',
    },
    {
        type: 'info',
        date: '2024-05-15',
        title: 'Low Balance Alert',
        description: 'Your account balance is low.',
        status: 'Unread',
    },
    {
        type: 'info',
        date: '2024-05-15',
        title: 'New Donation Target Set',
        description: 'Funded "Clean Water Initiative".',
        status: 'Unread',
    },
    {
        type: 'info',
        date: '2024-05-15',
        title: 'New Message from Admin',
        description: 'Please review the updated guidelines for donations.',
        status: 'Unread',
    },
];

export const projectSummaryMock = [

    {
        name: "SDG",
        value: "1, 2, 3, 8",
    },

    {
        name: "Project Currency",
        value: "NGN",
    },

    {
        name: "Budget",
        value: "NGN 5,000,000.00",
    },

    {
        name: "Amount Funded",
        value: "NGN 1,500,000.00",
    },

    {
        name: "Criteria",
        value: "Equally",
    },

    {
        name: "Description",
        value: "Short description",
    },

    {
        name: "Start date",
        value: "12 Dec, 2020",
    },

    {
        name: "End date",
        value: "12 Dec, 2020",
    },

    {
        name: "Country",
        value: "Nigeria",
    },

    {
        name: "Location",
        value: "Ikeja, Lagos, Nigeria",
    },
    {
        name: "Created",
        value: "12 Dec, 2020",
    },



]

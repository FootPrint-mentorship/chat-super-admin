export type Notification = {
    type: string;
    date: string;
    title: string;
    description: string;
    status: 'Unread' | 'Read';
};
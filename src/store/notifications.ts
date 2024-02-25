import type { Notification, NotificationStatus, NotificationStatusOption } from "$lib";
import { derived, writable } from "svelte/store";
import { LocalStorageKey, setAllowCookies } from "./cookies";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

export type NotificationStore = {
    status: NotificationStatus[];
    notifications: Notification[];
};

const initialValue: NotificationStore = {
    status: [],
    notifications: [
        {
            icon: faCookieBite,
            id: 'allow-cookies',
            body: 'notification.cookies.body',
            title: 'notification.cookies.title',
            action: (accept?: boolean) => setAllowCookies(accept),
            shouldDisplay: () => localStorage.getItem(LocalStorageKey.cookies) !== 'true',
            labels: {
                ok: 'common.allow',
                cancel: 'common.disallow',
            },
        },
    ],
}

// #region helpers

function handleSync(status: NotificationStatus[], allowCookies: boolean) {
    if (!allowCookies) return;

    try {
        localStorage.setItem(LocalStorageKey.notifications, JSON.stringify(status))
    } catch (e) {
        console.error(e);
    }
}

export const getNotificationInfoFromLocalStorage = (): NotificationStatus[] => {
    const data = localStorage.getItem(LocalStorageKey.notifications);
    
    if (!data) {
        return []
    }

    const obj = JSON.parse(data);

    let status: NotificationStatus[] = [];

    if (typeof obj === 'object' || obj.length !== undefined) {
        status = obj as NotificationStatus[];
    }

    return status;
};

// #endregion

export const notificationStore = writable<NotificationStore>(initialValue);

export const visibleNotifications = derived(notificationStore,
    ($notificationStore) =>
        $notificationStore.notifications.filter(({ id, shouldDisplay }) => !$notificationStore.status.find((item) => item.id === id) && (!shouldDisplay || shouldDisplay()))
);

export const sync = derived(notificationStore, ($notificationStore) => (allowCookies: boolean) => (
    handleSync($notificationStore.status, allowCookies))
);

export const updateStatus = derived(notificationStore, ($notificationStore) => (id: string, val: NotificationStatusOption, allowCookies: boolean) => {
    const status = [...($notificationStore.status.filter((s) => s.id !== id)), { id, status: val }];
    notificationStore.set({ ...$notificationStore, status });
    
    handleSync(status, allowCookies);
});

export function setNotificationStatus(status: NotificationStatus[]) {
    notificationStore.set({...initialValue, status });
}
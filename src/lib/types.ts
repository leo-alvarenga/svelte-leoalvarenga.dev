import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type LinkStyleMode = 'default' | 'alt' | 'dark1' | 'dark2';

export type NavbarLink = {
    title: string;
    href: string;
};

export type DecoratedLink = NavbarLink & {
    icon: IconDefinition;
};

export type Expertise = {
    title: string;
    info: string;
    icon: IconDefinition;
};

export type Experience = {
    name: string;
    time: string;
    info: string;
    stack: string[];
    place: {
        name: string;
        icon: string;
        page: string;
        location: string;
    };
};

export type Contact = DecoratedLink;

export type Project = {
    tags: string[];
    info: string;
    repo?: string;
    title: string;
    stack: string[];
    preview?: string;
    thumbnail?: string;
    inProgress?: boolean;
};

export type NotificationAction = ((accepted?: boolean) => void);

export type NotificationStatusOption =  'ok' | 'closed' | 'rejected';

export type NotificationStatus = {
    id: string;
    status: NotificationStatusOption;
};

export type Notification = Omit<NotificationStatus, 'status'> & {
    body: string;
    title: string;
    timeout?: number;
    icon?: IconDefinition;
    shouldDisplay?: () => boolean;
    action?: NotificationAction;
    labels?: {
        ok: string;
        cancel: string;
    };
};


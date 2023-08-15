import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type LinkStyleMode = 'default' | 'alt' | 'dark1' | 'dark2';

export interface NavbarLink {
    title: string;
    href: string;
}

export interface DecoratedLink extends NavbarLink {
    icon: IconDefinition;
}

export interface Expertise {
    title: string;
    info: string;
    icon: IconDefinition;
}

export interface Experience {
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
}

export type Contact = DecoratedLink;

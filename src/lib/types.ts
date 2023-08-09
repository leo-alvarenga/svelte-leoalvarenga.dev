export interface NavbarLink {
    title: string;
    href: string;
}

export interface Expertise {
    title: string;
    info: string;
    icon: string;
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

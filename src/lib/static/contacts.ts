import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Contact } from "../types";

export const contacts: Contact[] = [
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/leonardo-a-alvarenga/',
        icon: faLinkedin,
    },
    {
        title: 'Github',
        href: 'https://github.com/leo-alvarenga',
        icon: faGithub,
    },
    {
        title: 'Email',
        href: 'mailto:leonardo.a.alvarenga@gmail.com',
        icon: faEnvelope,
    }
];

export const contactsForLinkPage: Contact[] = [
    {
        title: 'Portfolio',
        href: `/`,
        icon: faArrowUpRightFromSquare,
    },
    ...contacts,
];

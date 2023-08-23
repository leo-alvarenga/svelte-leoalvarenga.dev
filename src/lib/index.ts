import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode, faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import type { Contact, Experience, Expertise, NavbarLink, Project } from './types';

export * from './types';

export const links: NavbarLink[] = [
    {
        title: 'layout.navbar.item.home',
        href: '/',
    },
    {
        title: 'layout.navbar.item.experience',
        href: '#xp',
    },
    {
        title: 'layout.navbar.item.projects',
        href: '#projects',
    },
    {
        title: 'layout.navbar.item.skills',
        href: '#skills',
    },
    {
        title: 'layout.navbar.item.contact',
        href: '#contact',
    }
];

export const routesWithNoDec = ['/links'];

export const skills = [
    'HTML', 'CSS', 'JavaScript',
    'TypeScript', 'React', 'Svelte',
    'SvelteKit', 'Linux', 'SQL', 'Postgresql',
    'styled-components', 'TailwindCSS',
    'Docker', 'Bash'
];

export const expertise: Expertise[] = [
    {
        title: 'data.expertise.software.title',
        info: 'data.expertise.software.info',
        icon: faLaptopCode,
    },
    {
        title: 'data.expertise.frontend.title',
        info: 'data.expertise.frontend.info',
        icon: faObjectGroup,
    }
];

export const experience: Experience[] = [
    {
        name: 'data.experience.vetta.traineeFrontend.name',
        time: '2023, Mar - current',
        info: 'data.experience.vetta.traineeFrontend.info',
        stack: ['TypeScript', 'React', 'styled-components', 'Postgresql', 'Bash'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    },
    {
        name: 'data.experience.vetta.internFrontend.name',
        time: '2022, Oct - 2023, Mar',
        info: 'data.experience.vetta.internFrontend.info',
        stack: ['TypeScript', 'React', 'styled-components', 'Postgresql', 'Bash'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    },
    {
        name: 'data.experience.vetta.internDevOps.name',
        time: '2022, Mar - 2022, Oct',
        info: 'data.experience.vetta.internDevOps.info',
        stack: ['Bash', 'Linux', 'Docker', 'Kubernetes', 'Azure DevOps'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    },
    {
        name: 'data.experience.ufv.ic.title',
        time: '2021, Oct - 2022, Sep',
        info: 'data.experience.ufv.ic.info',
        stack: ['Bash', 'Linux', 'Docker', 'Kubernetes', 'Azure DevOps'],
        place: {
            name: 'UFV',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Florestal, Brazil',
        },
    }
];

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

export const projectTypes = {
    frontend: 'data.projects.type.frontend',
    cli: 'dick',
};

export const projects: Project[] = [
    {
        title: 'Test 1',
        info: 'a test',
        type: projectTypes.frontend,
        stack: ['java', 'BrainFuck'],
    },
    {
        title: 'Test 2',
        info: 'a test',
        type: projectTypes.cli,
        stack: ['C', 'Dick'],
    },
    {
        title: 'Test 3',
        info: 'a test',
        type: projectTypes.frontend,
        stack: ['js', 'ts'],
    },
    {
        title: 'Test 4',
        info: 'a test',
        type: projectTypes.cli,
        stack: ['C', 'Dick'],
    },
    {
        title: 'Test 5',
        info: 'a test',
        type: projectTypes.frontend,
        stack: ['js', 'ts'],
    }
];

export const projectTypesList = Object.values(projectTypes);

export const getOccurrencesOfType = (t: string) => (
    projects.reduce<number>(
        (acc, { type }) => t === type ? acc + 1 : acc, 0
    )
);

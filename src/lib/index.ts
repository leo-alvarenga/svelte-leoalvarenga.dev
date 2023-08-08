import type { Experience, Expertise } from './types';

export * from './types';

export const skills = [
    'HTML', 'CSS', 'JavaScript',
    'TypeScript', 'React', 'Svelte',
    'SvelteKit', 'Linux', 'Postgresql',
    'styled-components', 'TailwindCSS',
    'Docker', 'Bash'
];

export const expertise: Expertise[] = [
    {
        title: 'Software development',
        info: 'Experience with Functional and Object Oriented Programming with Go, C, Java, C#, JavaScript and Typescript',
        src: 'https://www.svgrepo.com/show/529988/test-tube.svg',
        alt: ''
    },
    {
        title: 'Frontend Dev React, Svelte',
        info: 'Obscessed over modern Frontend web development. Experience with HTML, CSS, JS, Typescript, React, Svelte, SvelteKit',
        src: 'https://www.svgrepo.com/show/529988/test-tube.svg',
        alt: ''
    }
];

export const experience: Experience[] = [
    {
        name: 'Trainee Software Developer',
        time: '2023, Mar - current',
        info: '',
        stack: ['TypeScript', 'React', 'styled-components', 'Postgresql', 'Bash'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    },
    {
        name: 'Intern Software Developer',
        time: '2022, Oct - 2023, Mar',
        info: 'Lorem',
        stack: ['TypeScript', 'React', 'styled-components', 'Postgresql', 'Bash'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    },
    {
        name: 'Intern DevOps Engineer',
        time: '2022, Mar - 2022, Oct',
        info: 'Lorem',
        stack: ['Bash', 'Linux', 'Docker', 'Kubernetes', 'Azure DevOps'],
        place: {
            name: 'Vetta',
            page: 'https://vetta.digital',
            icon: 'https://ugc.production.linktr.ee/XquEozgIRLq7KtRcuWLp_7HZW7Y73e0z92ae3',
            location: 'Belo Horizonte, Brazil',
        },
    }
];

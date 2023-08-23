import type { Project } from "../types";

export const projectTags = {
    cli: 'data.projects.type.cli',
    linux: 'data.projects.type.linux',
    frontend: 'data.projects.type.frontend',
    fullstack: 'data.projects.type.fullstack',
};

export const projects: Project[] = [
    {
        title: 'data.projects.crcalc.title',
        info: 'data.projects.crcalc.info',
        tags: [projectTags.frontend],
        stack: ['javascript', 'react.js'],
        repo: 'https://github.com/leo-alvarenga/calculadora-cr',
      },
      {
        title: 'data.projects.dotfiles.title',
        info: 'data.projects.dotfiles.info',
        tags: [projectTags.linux],
        stack: ['linux', 'lua', 'bash'],
        repo: 'https://github.com/leo-alvarenga/dotfiles'
      },
      {
        title: 'data.projects.togo.title',
        info: 'data.projects.togo.info',
        tags: [projectTags.cli],
        stack: ['go', 'sqlite', 'html', 'css', 'javascript'],
        repo: 'https://github.com/leo-alvarenga/to-go'
      },
      {
        title: 'data.projects.uniguide.title',
        info: 'data.projects.uniguide.info',
        tags: [projectTags.frontend, projectTags.fullstack],
        stack: ['javascript', 'react.js', 'node.js', 'express'],
        repo: 'https://github.com/leo-alvarenga/guia-do-universitario'
      }
];

export const projectTypesList = Object.values(projectTags);

export const getOccurrencesOfTag = (t: string) => (
    projects.reduce<number>(
        (acc, { tags }) => tags.includes(t) ? acc + 1 : acc, 0
    )
);

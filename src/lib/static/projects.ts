import type { Project } from "../types";

export const projectTags = {
    frontend: 'data.projects.type.frontend',
    backend: 'data.projects.type.backend',
    fullstack: 'data.projects.type.fullstack',
    linux: 'data.projects.type.linux',
    other: 'common.other',
};

export const projects: Project[] = [
  {
    title: 'data.projects.curvedcrater.title',
    info: 'data.projects.curvedcrater.info',
    tags: [projectTags.backend],
    stack: ['go', 'sql', 'sqlite', 'bash'],
    repo: 'https://github.com/leo-alvarenga/curved-crater'
  },
  {
  
    title: 'data.projects.crcalc.title',
    info: 'data.projects.crcalc.info',
    preview: 'https://calculadora-cr.web.app/',
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
    tags: [projectTags.other],
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

export const SECTIONS = ['projects', 'skills', 'about', 'contact'] as const;

export type SectionId = (typeof SECTIONS)[number];

export const CONTACT = {
    email: 'rodrigoc94@hotmail.com',
    github: 'https://github.com/94rodrigo',
    linkedin: 'https://www.linkedin.com/in/rodrigo-de-abreu-costa-a97572b5/',
};

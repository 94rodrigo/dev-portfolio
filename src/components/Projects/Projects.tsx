import { useTranslation } from 'react-i18next';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Section from '../Section/Section';
import ProjectCard, { type Project } from '../ProjectCard/ProjectCard';
import { CONTACT } from '../../constants';

const FEATURED: Project[] = [
    {
        key: "weather",
        repo: "weather-ai-dashboard",
        imageSrc: "https://github.com/user-attachments/assets/5d7261b4-1997-454b-8698-45a89e085e7c",
        stack: ["Java", "Spring", "React", "TypeScript"],
    },
    {
        key: "portfolio",
        repo: "simulador-carteira-acoes",
        stack: ["Go", "React", "Vite", "TypeScript"],
    },
    {
        key: "currency",
        repo: "multilingual-currency-exchange",
        imageSrc: "https://camo.githubusercontent.com/786d5fb6542f729c3cfbb23708db40681b9d33e67c9121a0554b48df16e4e013/68747470733a2f2f692e706f7374696d672e63632f4e46594d327257782f436170747572612d64652d74656c612d323032342d30312d32322d3139333932372e6a7067",
        stack: ["React", "JavaScript"],
    },
];

const OTHERS: Project[] = [
    { key: "statusChecker", repo: "golang-status-checker-website", stack: ["Go", "HTML", "Sass"] },
    { key: "megaSena", repo: "conferidor_resultados_mega_sena", stack: ["Python"] },
];

const repoUrl = (repo: string) => `${CONTACT.github}/${repo}`;

export default function Projects() {
    const { t } = useTranslation();

    return (
        <Section id="projects" index="01" label={t('nav.projects')} title={t('projects.title')}>
            <div className="mt-12 space-y-14">
                {FEATURED.map((project, index) => (
                    <ProjectCard key={project.key} project={project} index={index} total={FEATURED.length} href={repoUrl(project.repo)} />
                ))}
            </div>

            <h3 className="mt-20 font-mono text-xs tracking-wide text-ink-muted uppercase">{t('projects.others')}</h3>
            <ul className="mt-4 border-b border-line">
                {OTHERS.map((project) => (
                    <li key={project.key} className="border-t border-line">
                        <a
                            href={repoUrl(project.repo)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid gap-1 py-4 sm:grid-cols-[14rem_minmax(0,1fr)_auto] sm:gap-6"
                        >
                            <span className="font-medium group-hover:text-accent">{t(`projects.items.${project.key}.title`)}</span>
                            <span className="text-sm leading-relaxed text-ink-muted">{t(`projects.items.${project.key}.description`)}</span>
                            <span className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                                {project.stack.join(" · ")}
                                <ArrowUpRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

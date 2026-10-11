import { useTranslation } from "react-i18next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { useReveal } from "../../hooks/useReveal";

export interface Project {
    key: string;
    repo: string;
    stack: string[];
    imageSrc?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    total: number;
    href: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectCard({ project, index, total, href }: ProjectCardProps) {
    const { t } = useTranslation();
    const { ref, visible } = useReveal<HTMLElement>();
    const title = t(`projects.items.${project.key}.title`);

    return (
        <article
            ref={ref}
            data-visible={visible ? "" : undefined}
            className="reveal grid gap-8 border-t border-line pt-8 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
        >
            {/* Mouse shortcut to the repo; hidden from keyboard/screen readers, which use the text link below */}
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="group/image block aspect-[16/10] overflow-hidden rounded border border-line bg-surface transition-colors hover:border-ink-muted"
            >
                {project.imageSrc ? (
                    <img
                        src={project.imageSrc}
                        alt=""
                        loading="lazy"
                        className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover/image:scale-[1.03]"
                    />
                ) : (
                    <div className="grid-paper flex size-full flex-col transition-transform duration-500 ease-out group-hover/image:scale-[1.03] items-center justify-center gap-1 p-4 text-center font-mono">
                        <span className="text-sm break-all text-ink">{project.repo}</span>
                        <span className="text-xs text-ink-muted">{t('projects.noImage')}</span>
                    </div>
                )}
            </a>

            <div className="flex flex-col">
                <span className="font-mono text-xs text-accent">
                    {pad(index + 1)} <span className="text-ink-muted">/ {pad(total)}</span>
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{t(`projects.items.${project.key}.description`)}</p>

                <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                    {project.stack.map((tech) => (
                        <li key={tech} className="rounded-sm border border-line px-2 py-1 text-ink-muted">{tech}</li>
                    ))}
                </ul>

                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-1 self-start font-medium text-accent link-underline"
                >
                    {t('projects.repo')}
                    <span className="sr-only">: {title}</span>
                    <ArrowUpRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </div>
        </article>
    );
}

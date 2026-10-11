import { useTranslation } from 'react-i18next';
import Section from '../Section/Section';

export default function Skills() {
    const { t } = useTranslation();

    const groups = [
        { key: "languages", items: ["Java", "TypeScript", "JavaScript", "Go", "Python"] },
        { key: "frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
        { key: "backend", items: ["Spring Boot", t('skills.items.rest'), t('skills.items.microservices'), t('skills.items.apiDesign')] },
        { key: "databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
        { key: "tools", items: ["Git", "Docker", "Linux", "Maven"] },
        { key: "learning", items: [t('skills.items.python'), t('skills.items.ml')] },
    ];

    return (
        <Section id="skills" index="02" label={t('nav.skills')} title={t('skills.title')}>
            <p className="mt-4 max-w-prose text-lg text-ink-muted">{t('skills.intro')}</p>

            <dl className="mt-10 border-b border-line">
                {groups.map((group) => (
                    <div key={group.key} className="grid gap-2 border-t border-line py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6">
                        <dt className="font-mono text-xs tracking-wide text-ink-muted uppercase sm:pt-1">{t(`skills.${group.key}`)}</dt>
                        <dd>
                            <ul className="flex flex-wrap gap-x-5 gap-y-1">
                                {group.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}

import { useTranslation } from 'react-i18next';
import Section from '../Section/Section';

const FACTS = ['location', 'experience', 'education', 'languages'] as const;

export default function About() {
    const { t } = useTranslation();

    return (
        <Section id="about" index="03" label={t('nav.about')} title={t('about.title')}>
            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
                <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-muted">
                    <p className="text-ink">{t('about.intro')}</p>
                    <p>{t('about.tech')}</p>
                    <p>{t('about.education')}</p>
                    <p>{t('about.interests')}</p>
                </div>

                <dl className="self-start text-sm">
                    {FACTS.map((fact) => (
                        <div key={fact} className="border-t border-line py-3">
                            <dt className="font-mono text-xs tracking-wide text-ink-muted uppercase">{t(`about.facts.${fact}`)}</dt>
                            <dd className="mt-1">{t(`about.facts.${fact}Value`)}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    );
}

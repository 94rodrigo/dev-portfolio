import { useTranslation } from 'react-i18next';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import rodrigoIllustration from "../../assets/images/rodrigo-picture.webp";
import { useCvLink } from '../../hooks/useCvLink';

export default function Hero() {
    const { t } = useTranslation();
    const cv = useCvLink();

    return (
        <section id="top" className="grid-paper">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-12 lg:px-8">
                <div className="animate-rise md:col-span-7">
                    <p className="flex items-center gap-2 font-mono text-sm text-ink-muted">
                        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                        {t('hero.eyebrow')}
                    </p>

                    <h1 className="mt-6 font-display text-6xl leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                        <span className="block">Rodrigo</span>
                        <span className="block text-accent">Costa</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
                        {t('hero.lead')}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded bg-accent px-5 py-3 font-medium text-accent-ink transition-colors hover:bg-accent-strong"
                        >
                            {t('hero.ctaProjects')}
                            <ArrowRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href={cv.href}
                            download={cv.fileName}
                            title={cv.title}
                            className="inline-flex items-center gap-2 rounded border border-ink/25 px-5 py-3 font-medium transition-colors hover:border-ink"
                        >
                            <ArrowDownTrayIcon aria-hidden="true" className="size-4" />
                            {t('navbar.downloadCV')}
                        </a>
                    </div>
                </div>

                <figure className="animate-rise mx-auto w-full max-w-sm [animation-delay:120ms] md:col-span-5 md:max-w-none">
                    <div className="border border-line bg-white p-3 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.3)] md:rotate-[1.5deg]">
                        <img
                            src={rodrigoIllustration}
                            alt={t('hero.avatarAlt')}
                            width={800}
                            height={883}
                            className="h-auto w-full"
                        />
                    </div>
                    <figcaption className="mt-4 font-mono text-xs text-ink-muted">{t('hero.figure')}</figcaption>
                </figure>
            </div>
        </section>
    );
}

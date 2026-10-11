import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <section className="grid-paper">
            <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
                <p className="font-mono text-sm text-accent">404</p>
                <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">{t('notFound.title')}</h1>
                <p className="mt-6 max-w-prose text-lg text-ink-muted">{t('notFound.text')}</p>
                <Link
                    to="/"
                    className="group mt-10 inline-flex items-center gap-2 rounded bg-accent px-5 py-3 font-medium text-accent-ink transition-colors hover:bg-accent-strong"
                >
                    <ArrowLeftIcon aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    {t('notFound.back')}
                </Link>
            </div>
        </section>
    );
}

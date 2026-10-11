import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRightIcon, CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid';
import Section from '../Section/Section';
import { CONTACT } from '../../constants';

const LINKS = [
    { label: "LinkedIn", href: CONTACT.linkedin, display: "in/rodrigo-de-abreu-costa" },
    { label: "GitHub", href: CONTACT.github, display: "github.com/94rodrigo" },
];

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked (insecure context, permissions); the mailto link still works
        }
    };

    return (
        <Section id="contact" index="04" label={t('nav.contact')} title={t('contact.title')}>
            <p className="mt-4 max-w-prose text-lg text-ink-muted">{t('contact.intro')}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={`mailto:${CONTACT.email}`} className="font-display text-3xl font-medium tracking-tight break-all link-underline sm:text-5xl">
                    {CONTACT.email}
                </a>
                <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex cursor-pointer items-center gap-2 rounded border border-ink/25 px-3 py-2 text-sm transition-colors hover:border-ink"
                >
                    {copied
                        ? <CheckIcon aria-hidden="true" className="size-4 text-accent" />
                        : <ClipboardDocumentIcon aria-hidden="true" className="size-4" />}
                    <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copy')}</span>
                </button>
            </div>

            <ul className="mt-12 border-b border-line">
                {LINKS.map((link) => (
                    <li key={link.label} className="border-t border-line">
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 py-4"
                        >
                            <span className="font-mono text-xs tracking-wide text-ink-muted uppercase">{link.label}</span>
                            <span className="flex items-center gap-2 group-hover:text-accent">
                                {link.display}
                                <ArrowUpRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

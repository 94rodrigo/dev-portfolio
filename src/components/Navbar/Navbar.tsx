import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ArrowDownTrayIcon, Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SECTIONS } from '../../constants'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useCvLink } from '../../hooks/useCvLink'
import { setTheme, useTheme } from '../../hooks/useTheme'

const LANGUAGES = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
]

function LanguageToggle() {
    const { t, i18n } = useTranslation();

    return (
        <div role="group" aria-label={t('navbar.language')} className="flex rounded border border-line p-0.5 font-mono text-xs">
            {LANGUAGES.map((lang) => (
                <button
                    key={lang.code}
                    type="button"
                    lang={lang.code}
                    aria-pressed={i18n.resolvedLanguage === lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className="cursor-pointer rounded-sm px-2 py-1 text-ink-muted transition-colors hover:text-ink aria-pressed:bg-ink aria-pressed:text-paper"
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}

function ThemeToggle() {
    const { t } = useTranslation();
    const theme = useTheme();
    const next = theme === 'dark' ? 'light' : 'dark';
    const label = next === 'dark' ? t('nav.themeDark') : t('nav.themeLight');

    return (
        <button
            type="button"
            onClick={() => setTheme(next)}
            aria-label={label}
            title={label}
            className="cursor-pointer rounded border border-line p-1.5 text-ink-muted transition-colors hover:text-ink"
        >
            {theme === 'dark'
                ? <SunIcon aria-hidden="true" className="size-4" />
                : <MoonIcon aria-hidden="true" className="size-4" />}
        </button>
    );
}

function CvLink() {
    const { t } = useTranslation();
    const cv = useCvLink();

    return (
        <a
            href={cv.href}
            download={cv.fileName}
            title={cv.title}
            className="inline-flex items-center gap-2 rounded bg-accent px-3 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
        >
            <ArrowDownTrayIcon aria-hidden="true" className="size-4" />
            {t('navbar.downloadCV')}
        </a>
    );
}

export default function Navbar() {
    const { t } = useTranslation();
    const active = useActiveSection(SECTIONS);

    return (
        <Disclosure as="header" className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
                <Link to="/#top" className="flex items-center gap-3 font-medium">
                    <span aria-hidden="true" className="grid size-8 place-items-center rounded bg-accent font-mono text-sm font-semibold text-accent-ink">
                        RC
                    </span>
                    Rodrigo Costa
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    <nav aria-label={t('nav.primary')}>
                        <ul className="flex items-center gap-6 text-sm">
                            {SECTIONS.map((id) => (
                                <li key={id}>
                                    <Link
                                        to={`/#${id}`}
                                        aria-current={active === id ? 'location' : undefined}
                                        className="relative py-2 text-ink-muted transition-colors hover:text-ink aria-[current]:text-ink aria-[current]:after:absolute aria-[current]:after:inset-x-0 aria-[current]:after:-bottom-px aria-[current]:after:h-px aria-[current]:after:bg-accent"
                                    >
                                        {t(`nav.${id}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                    <CvLink />
                </div>

                <DisclosureButton className="group -mr-2 rounded p-2 text-ink-muted hover:text-ink md:hidden">
                    <span className="sr-only group-data-open:hidden">{t('nav.openMenu')}</span>
                    <span className="sr-only hidden group-data-open:inline">{t('nav.closeMenu')}</span>
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
            </div>

            <DisclosurePanel className="border-t border-line md:hidden">
                <nav aria-label={t('nav.primary')} className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
                    <ul className="space-y-1">
                        {SECTIONS.map((id) => (
                            <li key={id}>
                                {/* DisclosureButton as a link closes the panel on navigation */}
                                <DisclosureButton
                                    as={Link}
                                    to={`/#${id}`}
                                    aria-current={active === id ? 'location' : undefined}
                                    className="block rounded px-2 py-2 text-base text-ink-muted hover:text-ink aria-[current]:text-ink"
                                >
                                    {t(`nav.${id}`)}
                                </DisclosureButton>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                        <div className="flex items-center gap-2">
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                        <CvLink />
                    </div>
                </nav>
            </DisclosurePanel>
        </Disclosure>
    )
}

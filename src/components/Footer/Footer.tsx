import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT } from '../../constants';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>
                    © {new Date().getFullYear()} Rodrigo Costa. {t('footer.builtWith')}
                </p>
                <ul className="flex gap-5">
                    <li><a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a></li>
                    <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a></li>
                    <li><Link to="/#top" className="hover:text-ink">{t('footer.backToTop')} ↑</Link></li>
                </ul>
            </div>
        </footer>
    );
}

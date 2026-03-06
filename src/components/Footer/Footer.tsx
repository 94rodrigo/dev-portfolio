import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800">
            <span className="text-amber-50">{t('footer.credit')}</span>
        </footer>
    );
}
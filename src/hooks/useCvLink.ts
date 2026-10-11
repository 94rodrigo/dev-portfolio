import { useTranslation } from 'react-i18next';

// CV in the language currently selected on the site
export function useCvLink() {
    const { t, i18n } = useTranslation();
    const fileName = i18n.resolvedLanguage === 'pt' ? 'Rodrigo_Costa_Currículo.pdf' : 'Rodrigo_Costa_CV.pdf';

    return {
        href: `${import.meta.env.BASE_URL}documents/${fileName}`,
        fileName,
        title: t('navbar.cvLanguage'),
    };
}

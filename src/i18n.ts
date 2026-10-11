import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en/common.json';
import ptTranslations from './locales/pt/common.json';

const resources = {
  en: {
    common: enTranslations,
  },
  pt: {
    common: ptTranslations,
  },
};

// Keep <html lang> in sync so screen readers and hyphenation use the right language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng.startsWith('pt') ? 'pt-BR' : 'en';
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    nonExplicitSupportedLngs: true,
    defaultNS: 'common',
    ns: 'common',
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

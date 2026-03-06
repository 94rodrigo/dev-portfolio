import BackHomeButton from "../components/BackHome/BackHomeButton";
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    return (
        <>
            <BackHomeButton />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto py-16 sm:py-24 lg:py-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t('skills.title')}</h2>
                    
                    <p className="mt-4 text-gray-500">
                        {t('skills.intro')}
                    </p>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.languages')}</h4>
                    
                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.languageList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.frontend')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.frontendList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.backend')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.backendList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.databases')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.databaseList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.tools')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.toolsList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.learning')}</h4>
                    
                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        {t('skills.learningList', { returnObjects: true }).map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
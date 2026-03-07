import BackHomeButton from "../components/BackHome/BackHomeButton";
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <BackHomeButton />
            <div className="mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">{t('about.title')}</h1>

                <img
                    className="w-48 h-48 rounded-full mx-auto mb-6 sm:mx-0 sm:float-left sm:mr-10"
                    src="https://avatars.githubusercontent.com/u/51063103?v=4"
                    alt="Profile Picture"
                />

                <p className="text-lg text-justify text-gray-600 mt-4">
                    {t('about.intro')}
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4"> 
                    {t('about.tech')}
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    {t('about.education')}
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    {t('about.languages')}
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    {t('about.interests')}
                </p>

                <p className="text-lg text-justify text-gray-600 mt-4">
                    {t('about.career')}
                </p>
            </div>
        </>
    );
}
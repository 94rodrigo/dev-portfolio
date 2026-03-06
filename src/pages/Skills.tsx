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
                        <li>Java</li>
                        <li>TypeScript</li>
                        <li>Go</li>
                        <li>Python</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.frontend')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind</li>
                        <li>JavaScript</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.backend')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Java Spring Boot</li>
                        <li>REST API development</li>
                        <li>Microservices</li>
                        <li>API design</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.databases')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.tools')}</h4>

                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Linux</li>
                        <li>Maven</li>
                    </ul>

                    <h4 className="mt-6 text-xl font-semibold text-gray-900 text-left">{t('skills.learning')}</h4>
                    
                    <ul className="mt-4 text-gray-500 list-disc list-inside text-left">
                        <li>Improving my skills with Python</li>
                        <li>Machine learning</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
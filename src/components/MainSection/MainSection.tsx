import { useTranslation } from 'react-i18next';
import rodrigoIcon from "../../assets/images/rodrigo-picture.png";

export default function MainSection() {
    const { t } = useTranslation();

    return (
        <div className="mx-auto max-w-7xl text-gray-600 px-4 sm:px-6 lg:px-8 rounded-lg border border-gray-200 grid grid-cols-2 justify-items-center items-center h-full">
            <div>
                <span className="text-3xl">{t('mainSection.greeting')}</span>
                <br />
                <br />
                <br />
                <h1 id="lbl-oftware-developer" className="text-5xl font-extrabold bg-linear-to-r from-orange-300 via-pink-500 to-purple-900 bg-clip-text text-transparent">
                    {t('mainSection.title')}
                </h1>
                <br />
                <br />
                <br />
                <span className={`font-sans text-gray-600 leading-relaxed text-xl`}>{t('mainSection.subtitle')}</span>
            </div>
            <div className="flex items-center justify-center h-full">
                <img className="max-w-[75%]" src={rodrigoIcon} alt="Rodrigo Costa" />
            </div>
        </div>
    );
}
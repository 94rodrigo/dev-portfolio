import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function BackHomeButton() {
    const { t } = useTranslation();

    return (
        <div className="flex content-start mb-6">
            <Link to="/" className="inline-flex text-left gap-2 rounded-md px-3 py-2 text-xl font-medium text-gray-600 cursor-pointer hover:text-gray-800 hover:underline">
                {t('backButton')}
            </Link>
        </div>
    );
}
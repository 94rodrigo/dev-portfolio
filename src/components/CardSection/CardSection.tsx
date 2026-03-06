import Card, { type CardProps } from "../Card/Card";
import aboutMeIcon from "/icons/about-me-icon.png";
import myProjectsIcon from "/icons/my-projects-icon.png";
import skillsIcon from "/icons/skills-icon.png";
import { useTranslation } from 'react-i18next';

export default function CardSection() {
    const { t } = useTranslation();

    const cardList: CardProps[] = [
        {
            title: t('cardSection.aboutMe'),
            description: t('cardSection.aboutMeDesc'),
            colorIconBackground: "#F2E6E0",
            href: "/about",
            icon: aboutMeIcon,
            colorButton: "#FAA03F"
        },
        {
            title: t('cardSection.myProjects'),
            description: t('cardSection.myProjectsDesc'),
            colorIconBackground: "#D8DCF8",
            href: "/projects",
            icon: myProjectsIcon,
            colorButton: "#6A4EBE"
        },
        {
            title: t('cardSection.skills'),
            description: t('cardSection.skillsDesc'),
            colorIconBackground: "#DFF0FB",
            href: "/skills",
            icon: skillsIcon,
            colorButton: "#3FABC4"
        }
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-16 sm:py-24 lg:py-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t('cardSection.heading')}</h2>
                
                <p className="mt-4 text-gray-500">
                    {t('cardSection.description')}
                </p>

                <div className="mt-20 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {cardList.map(card => {
                        return <Card 
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                colorIconBackground={card.colorIconBackground}
                                href={card.href}
                                icon={card.icon}
                                colorButton={card.colorButton}
                            />
                    })}
                </div>
            </div>
        </div>
    );
}
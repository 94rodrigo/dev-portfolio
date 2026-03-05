import Card, { type CardProps } from "../Card/Card";
import aboutMeIcon from "/icons/about-me-icon.png";
import myProjectsIcon from "/icons/my-projects-icon.png";
import skillsIcon from "/icons/skills-icon.png";

export default function CardSection() {

    const cardList: CardProps[] = [
        {
            title: "About Me",
            description: "Get to know more about me and my journey as a software developer.",
            colorIconBackground: "#F2E6E0",
            href: "/about",
            icon: aboutMeIcon,
            colorButton: "#FAA03F"
        },
        {
            title: "My projects",
            description: "Check out some of the projects I have worked on.",
            colorIconBackground: "#D8DCF8",
            href: "/projects",
            icon: myProjectsIcon,
            colorButton: "#6A4EBE"
        },
        {
            title: "Skills",
            description: "See the tolls and technologies I specialize in.",
            colorIconBackground: "#DFF0FB",
            href: "/skills",
            icon: skillsIcon,
            colorButton: "#3FABC4"
        }
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-16 sm:py-24 lg:py-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
                
                <p className="mt-4 text-gray-500">
                    Here are some of my projects. Click on the cards to see more details.
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
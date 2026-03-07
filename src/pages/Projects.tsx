import BackHomeButton from "../components/BackHome/BackHomeButton";
import ProjectCard, { type ProjectCardProps } from "../components/ProjectCard/ProjectCard";
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();

    const projects: ProjectCardProps[] = [
        {
            title: "weather-ai-dashboard",
            description: "Weather Dashboard is a full-stack web application that provides real-time weather information and AI-powered insights for multiple locations. The project is built with a modern technology stack, supporting multiple languages for a global user experience.",
            href: "https://github.com/94rodrigo/weather-ai-dashboard",
            imageSrc: "https://github.com/user-attachments/assets/5d7261b4-1997-454b-8698-45a89e085e7c",
            technologies: "Java, Typescript, React, Spring"
        },
        {
            title: "multilingual-currency-exchange",
            description: "This is a project is a multilingual currency converter, developed using React.js.",
            href: "https://github.com/94rodrigo/multilingual-currency-exchange",
            imageSrc: "https://camo.githubusercontent.com/786d5fb6542f729c3cfbb23708db40681b9d33e67c9121a0554b48df16e4e013/68747470733a2f2f692e706f7374696d672e63632f4e46594d327257782f436170747572612d64652d74656c612d323032342d30312d32322d3139333932372e6a7067",
            technologies: "React, Javascript"
        },
        {
            title: "simulador-carteira-acoes",
            description: "Este projeto é um simulador de carteiras de ações, permitindo ao usuário criar, gerenciar e analisar carteiras de investimentos de forma simples e intuitiva. O sistema é composto por um backend em Go e um frontend moderno utilizando React com Vite.",
            href: "https://github.com/94rodrigo/simulador-carteira-acoes",
            imageSrc: "",
            technologies: "Go, React, Vite, Typescript"
        },
        {
            title: "golang-status-checker-website",
            description: "Checks the http response of any website. How it works: The application receive a website URL (http://www....com) and return the http status response of this request. If the icon is green, it means the response has the code less than 400. If it is red, the code is more 400 or more.",
            href: "https://github.com/94rodrigo/golang-status-checker-website",
            imageSrc: "https://raw.githubusercontent.com/94rodrigo/golang-status-checker-website/refs/heads/main/images/status200okExample.jpg",
            technologies: "Go, HTML, CSS, SASS"
        },
        {
            title: "conferidor_resultados_mega_sena",
            description: "Este é um script em Python que confere os resultados de jogos da Mega Sena a partir de números sorteados fornecidos pelo usuário e jogos armazenados em um arquivo .txt. O programa exibe as linhas que possuem 4 ou mais acertos e a quantidade de acertos em cada uma dessas linhas.",
            href: "https://github.com/94rodrigo/conferidor_resultados_mega_sena",
            imageSrc: "",
            technologies: "Python"
        },
    ]

    return (
        <>
            <BackHomeButton />
            <h1 className="text-3xl font-bold mb-6 text-gray-700">{t('projects.title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        href={project.href}
                        imageSrc={project.imageSrc}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </>
    );
}
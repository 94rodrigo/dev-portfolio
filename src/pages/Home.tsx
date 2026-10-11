import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { SECTIONS, type SectionId } from "../constants";

export default function Home() {
    const { pathname, hash, key } = useLocation();

    // Scroll to the section in the hash (/#projects) or in an old multi-page URL (/projects).
    // `key` changes on every navigation, so clicking the same link again scrolls again.
    useEffect(() => {
        const legacySection = pathname.replace(/^\/|\/$/g, "");
        const target = hash.slice(1) || (SECTIONS.includes(legacySection as SectionId) ? legacySection : "");
        if (target) document.getElementById(target)?.scrollIntoView();
    }, [pathname, hash, key]);

    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
    );
}

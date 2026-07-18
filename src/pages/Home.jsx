import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <TechStack />
            <Project />
            <Contact />
        </main>
    );
}
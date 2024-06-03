import { AboutMe } from "../cmps/AboutMe";
import { Projects } from "../cmps/Projects.jsx";
import { ContactMe } from "../cmps/ContactMe.jsx";
import { AppHeader } from '../cmps/AppHeader.jsx';
import { useEffect, useRef, useState } from 'react';

export function HomePage() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (homeRef.current) observer.observe(homeRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            if (homeRef.current) observer.unobserve(homeRef.current);
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (projectsRef.current) observer.unobserve(projectsRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);

    const scrollToComponent = (component) => {
        switch (component) {
            case 'home':
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <section className="Home-Page">
            <AppHeader scrollToComponent={scrollToComponent} activeSection={activeSection} />
            <section className={`title-card-container fade-in-visible`} id="home" ref={homeRef}>
                <section className="title-card">
                    <h2 className="title-new">Ben Goldberger</h2>
                    <section className="title-left">
                        <h5>Full Stack Developer & 3D Generalist</h5>
                        <section className="links-pages">
                            <a href="https://www.linkedin.com/in/ben-goldberger-290b8b23a/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bengold1999"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.youtube.com/channel/UCb3pD1GOGY6pF4pnKCozyMg"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://cara.app/bengold1999"><i className="fa-brands fa-artstation"></i></a>
                        </section>
                    </section>
                </section>
                <img src="https://res.cloudinary.com/dheh8zkmv/image/upload/v1716300062/pxmoffs5yooxgcrawai2.png" alt="" />
            </section>
            <div ref={aboutRef} id="about" className={` ${activeSection === 'about' ? 'fade-in-visible' : 'fade-in'}`}>
                <AboutMe />
            </div>
            <div ref={projectsRef} id="projects" className={` ${activeSection === 'projects' ? 'fade-in-visible' : 'fade-in'}`}>
                <Projects />
            </div>
            <div ref={contactRef} id="contact" className={` ${activeSection === 'contact' ? 'fade-in-visible' : 'fade-in'}`} style={{ width: '100%' }}>
                <ContactMe />
            </div>
        </section>
    );
}

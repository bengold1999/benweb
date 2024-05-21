import { AboutMe } from "../cmps/AboutMe";
import { Projects } from "../cmps/Projects.jsx";
import { ContactMe } from "../cmps/ContactMe.jsx";
import { AppHeader } from '../cmps/AppHeader.jsx';
import { useRef } from 'react';

export function HomePage() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

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
        <section className="Home-Page" ref={homeRef}>
            <AppHeader scrollToComponent={scrollToComponent} />
            <section className="title-card-container">
                <section className="title-card">
                        <h2 className="title-new">Ben Goldberger</h2>
                    <section className="title-left">
                        <h5>Full Stack Developer & 3D Generalist</h5>
                        <section className="links-pages">
                            <a href="https://www.linkedin.com/in/ben-goldberger-290b8b23a/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/bengold1999"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.youtube.com/channel/UCb3pD1GOGY6pF4pnKCozyMg"><i className="fa-brands fa-youtube"></i></a>
                        </section>
                    </section>
                </section>
              <img src="https://res.cloudinary.com/dheh8zkmv/image/upload/v1716300062/pxmoffs5yooxgcrawai2.png" alt="" />
            </section>
            <div ref={aboutRef}>
                <AboutMe />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div style={{ width: '100%' }} ref={contactRef}>
                <ContactMe />
            </div>
        </section>
    );
}
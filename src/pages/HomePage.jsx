import { AboutMe } from "../cmps/AboutMe";
import { Projects } from "../cmps/Projects.jsx";
import { ContactMe } from "../cmps/ContactMe.jsx";

export function HomePage() {
    return <section className="Home-Page">
        <section className="title-card-container">
            <section className="title-card">
                <section className="title-left">
                    <h3>Ben Goldberger</h3>
                    <p>Full Stack Developer & 3D Generalist</p>
                    <section className="links-pages">
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i class="fa-brands fa-github"></i></a>
                    </section>
                </section>
                <img src="" alt="img" />
            </section>
        </section>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
    </section>
}
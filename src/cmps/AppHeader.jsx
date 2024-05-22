import React from 'react';

export function AppHeader({ scrollToComponent, activeSection }) {
    const handleClick = (section) => {
        scrollToComponent(section);
    };

    return (
        <section className={`appHeader ${activeSection === 'about' ? 'about-active' : ''}`}>
            <div 
                className={`card_logo ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={() => handleClick('home')}
            >
                <h4 className="fa-solid fa-house"></h4>
                <span className="hover-text">Home</span>
            </div>
            <div 
                className={`card_logo ${activeSection === 'about' ? 'active' : ''}`} 
                onClick={() => handleClick('about')}
            >
                <h4 className="fa-solid fa-address-card"></h4>
                <span className="hover-text">About</span>
            </div>
            <div 
                className={`card_logo ${activeSection === 'projects' ? 'active' : ''}`} 
                onClick={() => handleClick('projects')}
            >
                <h4 className="fa-solid fa-file"></h4>
                <span className="hover-text">Projects</span>
            </div>
            <div 
                className={`card_logo ${activeSection === 'contact' ? 'active' : ''}`} 
                onClick={() => handleClick('contact')}
            >
                <h4 className="fa-solid fa-message"></h4>
                <span className="hover-text">Contact</span>
            </div>
        </section>
    );
}

import React, { useState } from 'react';

export function AppHeader({ scrollToComponent }) {
    const [activeSection, setActiveSection] = useState('');

    const handleClick = (section) => {
        setActiveSection(section);
        scrollToComponent(section);
    };

    return (
        <section className="appHeader">
            <div 
                className={`card_logo ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={() => handleClick('home')}
            >
                <h4 className="fa-solid fa-house"></h4>
            </div>
            <div 
                className={`card_logo ${activeSection === 'about' ? 'active' : ''}`} 
                onClick={() => handleClick('about')}
            >
                <h4 className="fa-solid fa-address-card"></h4>
            </div>
            <div 
                className={`card_logo ${activeSection === 'projects' ? 'active' : ''}`} 
                onClick={() => handleClick('projects')}
            >
                <h4 className="fa-solid fa-file"></h4>
            </div>
            <div 
                className={`card_logo ${activeSection === 'contact' ? 'active' : ''}`} 
                onClick={() => handleClick('contact')}
            >
                <h4 className="fa-solid fa-message"></h4>
            </div>
        </section>
    );
}

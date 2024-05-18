export function AppHeader({ scrollToComponent }) {
    return (
        <section className="appHeader">
            <div className="card_logo" onClick={() => scrollToComponent('home')}>
                <h4 className="fa-solid fa-house"></h4>
            </div>
            <div className="card_logo" onClick={() => scrollToComponent('about')}>
                <h4 className="fa-solid fa-address-card"></h4>
            </div>
            <div className="card_logo" onClick={() => scrollToComponent('projects')}>
                <h4 className="fa-solid fa-file"></h4>
            </div>
            <div className="card_logo" onClick={() => scrollToComponent('contact')}>
                <h4 className="fa-solid fa-message"></h4>
            </div>
        </section>
    )
}
function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list">
                    <li className="portfolio__link">
                        <a className="portfolio__link-text" href="https://github.com/AnnaLink22/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
                            <div className="portfolio__link-icon"></div>
                        </a>
                    </li>
                    <li className="portfolio__link">
                        <a className="portfolio__link-text" href="https://annalink22.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт
                            <div className="portfolio__link-icon"></div>
                        </a>
                    </li>
                    <li className="portfolio__link">
                        <a className="portfolio__link-text" href="https://github.com/AnnaLink22/express-mesto" target="_blank" rel="noreferrer">Одностраничное приложение
                            <div className="portfolio__link-icon"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
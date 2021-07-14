function Techs() {
    return (
        <section className="techs">
            <div className="techs__container">
                <h3 className="techs__title">Технологии</h3>
                <h2 className="techs__heading">7 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__icons">
                    <li className="techs__icon"><a className="techs__link" href="https://ru.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">HTML</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://ru.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">CSS</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank" rel="noreferrer">JS</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://ru.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">React</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://ru.wikipedia.org/wiki/Git" target="_blank" rel="noreferrer">Git</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://expressjs.com/ru/" target="_blank" rel="noreferrer">Express.js</a></li>
                    <li className="techs__icon"><a className="techs__link" href="https://docs.mongodb.com/" target="_blank" rel="noreferrer">mongoDB</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;
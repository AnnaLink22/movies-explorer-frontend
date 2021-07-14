import mypic from '../../images/mypic.jpg';

function AboutMe() {
    return (
        <section className="aboutme">
            <div className="aboutme__container">
                <h3 className="aboutme__title">Студент</h3>
                <div className="aboutme__columns">
                    <div className="aboutme__column">
                        <h2 className="aboutme__name">Анна</h2>
                        <h4 className="aboutme__job">Веб-разработчица</h4>
                        <p className="aboutme__text">Я родилась и выросла в г.Анапа. В 2019 году переехала в Китай и уже 2 года работаю учителем английского. Мое основное хобби - это учится чему-то новому. Я люблю путешествовать и изучать иностранные языки. Интерес к языкам и привел меня в веб-разработку. Год назад я начала свою учебу в Яндекс-Практикуме, и теперь ищу удаленную работу.</p>
                        <ul className="aboutme__links">
                            <li className="aboutme__link"><a className="aboutme__link-text" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li className="aboutme__link"><a className="aboutme__link-text" href="https://github.com/AnnaLink22" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                    </div>
                    <img className="aboutme__pic" src={mypic} alt="Моя фотография"></img>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
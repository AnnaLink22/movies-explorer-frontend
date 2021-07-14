function AboutProject() {
    return (
        <section className="project">
            <div className="project__container">
                <h2 className="project__title">О проекте</h2>
                <div className="project__columns">
                    <div className="project__column">
                        <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="project__column">
                        <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="project__timeframe">
                    <div className="project__timeframe-column">
                        <div className="project__backend">1 неделя</div>
                        <p className="project__timeframe-subtitle">Back-end</p>
                    </div>
                    <div className="project__timeframe-column">
                        <div className="project__frontend">4 недели</div>
                        <p className="project__timeframe-subtitle">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
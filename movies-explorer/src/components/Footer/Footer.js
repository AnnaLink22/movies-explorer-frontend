function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <nav className="footer__columns">
                    <div className="footer__column footer__column_content_copyright">
                        <p className="footer__copyright">&copy; 2021</p>
                    </div>
                    <div className="footer__column footer__column_content_social">
                        <ul className="footer__column-links">
                            <li><a className="footer__column-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                            <li><a className="footer__column-link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a className="footer__column-link" href="https://www.facebook.com/yandex.praktikum/" target="_blank" rel="noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
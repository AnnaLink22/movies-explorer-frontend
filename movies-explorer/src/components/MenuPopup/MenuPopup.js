import { Link } from 'react-router-dom';

function MenuPopup() {
    return (
        <section className="menu">
            <div className="menu__container">
                <button type="button" className="menu__close-btn"></button>
                <div className="menu__links">
                    <Link to="/" className="menu__link menu__main-link">Главная</Link>
                    <Link to="/movies" className="menu__link  menu__movies-link">Фильмы</Link>
                    <Link to="/saved-movies" className="menu__link menu__saved-link">Сохранённые фильмы</Link>
                    <Link to="/profile" className="menu__profile-btn">
                        <div className="menu__icon"></div>Аккаунт
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default MenuPopup;
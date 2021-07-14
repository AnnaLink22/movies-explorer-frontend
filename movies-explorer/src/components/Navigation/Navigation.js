import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <section className="navigation">
            <div className="navigation__menu-icon"></div>
            <div className="navigation__container">
                <Link to="/movies" className="navigation__movies-link">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__saved-link">Сохранённые фильмы</Link>
                <Link to="/profile" className="navigation__profile-btn">
                    <div className="navigation__icon"></div>Аккаунт
                </Link>
            </div>
        </section>
    )
}

export default Navigation;
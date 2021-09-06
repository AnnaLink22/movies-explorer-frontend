import { Route, Switch, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';

function Header({ loggedIn }) {
    return (
        <header className="header">
            <Switch>
                <Route path="/movies">
                    <div className="header__cover_white">
                        <div className="header__container">
                            <Link to="/" className="header__logo"></Link>
                            <Navigation />
                        </div>
                    </div>
                </Route>
                <Route path="/saved-movies">
                    <div className="header__cover_white">
                        <div className="header__container">
                            <Link to="/" className="header__logo"></Link>
                            <Navigation />
                        </div>
                    </div>
                </Route>
                <Route path="/profile">
                    <div className="header__cover_white">
                        <div className="header__container">
                            <Link to="/" className="header__logo"></Link>
                            <Navigation />
                        </div>
                    </div>
                </Route>
                <Route exact path="/">
                    <div className="header__cover">
                        <div className="header__container">
                            <Link to="/" className="header__logo"></Link>

                            {loggedIn && <Navigation />}

                            {!loggedIn && (
                                <div className="header__column">
                                    <Link to="/signup" className="header__container-link">Регистрация</Link>
                                    <Link to="/signin" className="header__container-signin-btn" >Войти</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </Route>
                <Route path="/signup">
                    <div className="header__cover_white">
                        <div className="header__container_sign">
                            <Link to="/" className="header__logo"></Link>
                            <p className="header__container-text">Добро пожаловать!</p>
                        </div>
                    </div>
                </Route>
                <Route path="/signin">
                    <div className="header__cover_white">
                        <div className="header__container_sign">
                            <Link to="/" className="header__logo"></Link>
                            <p className="header__container-text">Рады видеть!</p>
                        </div>
                    </div>
                </Route>
            </Switch>

        </header>
    )

}

export default Header;
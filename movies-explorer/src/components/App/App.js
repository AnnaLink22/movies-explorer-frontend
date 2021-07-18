import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import MenuPopup from '../MenuPopup/MenuPopup.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>

        <ProtectedRoute
          path="/movies"
          component={Movies}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
        />

        <ProtectedRoute
          path="/profile"
          component={Profile}
        />


        <Route path="/signin">
          <div className="login__container">
            <Login />
          </div>
        </Route>

        <Route path="/signup">
          <div className="register__container">
            <Register />
          </div>
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/notfound">
          <NotFoundPage />
        </Route>

      </Switch>

      <MenuPopup />

      <Footer />
    </div>
  )
}

export default App;
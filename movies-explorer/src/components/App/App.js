import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import api from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoading, setIsloading] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  const [movies, setMovies] = React.useState([]);

  const [likedMovies, setLikedMovies] = React.useState([]);

  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = React.useState({});

  const handleRegister = ({ name, email, password }) => {
    setIsloading(true);
    auth.register({ name, email, password }).then((res) => {
      history.push('/signin');
      return res;
    }).catch((err) => {
      setErrorMessage({ err })
    })
      .finally(() => {
        setIsloading(false);
      })
  }

  const handleLogin = ({ email, password }) => {
    setIsloading(true);
    auth.authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          setUserData(data);
          localStorage.setItem('token', data.token);
          history.push('/movies');
          return;
        }
      }).catch(err => setErrorMessage(err.message))
      .finally(() => {
        setIsloading(false);
      })
  }

  function handleUpdateUser(name, email) {
    setIsloading(true);
    api.saveUserInfo(name, email, {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    })
      .then(info => {
        setCurrentUser(info);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsloading(false);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/signin');
  }

  function handleMovieLike(movie) {
    api.saveNewMovie(movie, {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }).then((newMovie) => {
      setLikedMovies((state) => state.map((m) => m._id === movie._id ? newMovie : m));
    }).catch(err => console.log(err))
  }

  function handleMovieDelete(movie) {
    api.deleteMovie(movie._id, {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }).then(() => {
      setLikedMovies((movies) => movies.filter((m) => m._id !== movie._id));
    }).catch(err => console.log(err))
  }

  function handleSearchSubmit() {
    moviesApi.getAllMovies()
    .then((movies) => {
      if (!localStorage.getItem('movies')) {
        localStorage.setItem('movies', movies)
        setMovies((movies));
      }
      
    })
  }

  React.useEffect(() => {
    moviesApi.getAllMovies()
    .then((movies) => {
      localStorage.setItem('movies', JSON.stringify(movies));
      setMovies((movies));
    })
    .catch(err => console.log(err))
  })
    
  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([
        api.getInfo({
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }),
        api.getLikedMovies({
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }),
      ]).then(([info, movies]) => {
        setCurrentUser(info);
        setLikedMovies(movies);
      })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.getUser(token).then((user) => {
        if (user.email) {
          setUserData({ email: user.email, name: user.name, _id: user._id });
          setLoggedIn(true);
          history.push('/');
        }
      }).catch(() => {
        localStorage.removeItem('token');
      })
    }
  }, [history, loggedIn]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />

        <Switch>

          {/* <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onMovieLike={handleMovieLike}
          /> */}

        <Route path="/movies">
          <Movies
          loggedIn={loggedIn}
          onMovieLike={handleMovieLike}
          movies={movies}
          />
        </Route>

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          savedMovies={likedMovies}
          onMovieDelete={handleMovieDelete}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          email={userData.email}
          name={userData.name}
          component={Profile}
          onUpdate={handleUpdateUser}
          onSignout={handleSignOut}
        />

        <Route path="/signin">
          <div className="login__container">
            <Login
              onLogin={handleLogin}
              isLoading={isLoading}
            />
          </div>
        </Route>

        <Route path="/signup">
          <div className="register__container">
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
            />
          </div>
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>

        </Switch>

      <MenuPopup />

      <Footer />
      </div>
    </CurrentUserContext.Provider >
  )
}

export default App;
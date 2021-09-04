import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import InfoTool from '../InfoTool/InfoTool.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth.js';
import api from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoading, setIsloading] = React.useState(false);

  const [isLoaderOpen, setIsLoaderOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  const location = useLocation();

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [shortFilter, setShortFilter] = React.useState(false);

  const [isSuccesful, setIsSuccesful] = React.useState(false);

  const [isInfoToolOpen, setIsInfoToolOpen] = React.useState(false);

  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = React.useState({});

  const [searchResult, setSearchResult] = React.useState([]);

  const [noResult, setNoResult] = React.useState(false);

  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = React.useState([]);

  const url = 'https://api.nomoreparties.co';


  const handleRegister = ({ name, email, password }) => {
    setIsloading(true);
    auth.register({ name, email, password }).then((res) => {
      setIsSuccesful(true);
      setIsInfoToolOpen(true);
      return res;
    }).catch((err) => {
      setIsSuccesful(false);
      setIsInfoToolOpen(true);
      setErrorMessage(err.message)
    })
      .finally(() => {
        setIsloading(false);
      })
  }

  const closeInfotool = () => {
    setIsInfoToolOpen(false);
    history.push('/signin');
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
    localStorage.removeItem('movies');
    localStorage.removeItem('searchResult');
    setSearchResult([]);
    setSavedMovies([]);
    setSavedMoviesSearchResult([]);
    setLoggedIn(false);
    history.push('/signin');
  }

  function toggleShortFilter() {
    setShortFilter((prevState) => !prevState);

    setIsLoaderOpen((prevLoaderState) => {
      showLoader(true);

      setTimeout(() => {
        showLoader(false);
      }, 300);
      return !prevLoaderState;
    });
  }

  function handleMovieLike(movie) {
    const savedMovie = savedMovies.find((m) => m.id === movie.id);
    if (savedMovie) {
      handleMovieDelete(savedMovie);
    } else {
      api.saveNewMovie(movie, {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }).then((newMovie) => {
        setSavedMovies((state) => state.map((m) => m.id === movie.id ? newMovie : m));
      }).catch(err => console.log(err))
    }
  }

  const deleteNullDataMovies = (movies) => {
    return movies.filter((movie) => !Object.values(movie).includes(null));
  };

  const changeImageUrl = (movies) => {
    return movies.map((movie) => {
      Object.keys(movie.image).forEach((key) => {
        if (key === 'url') {
          movie.image.url = url + movie.image.url;
        }
      });
      return movie;
    });
};

  function handleMovieDelete(movie) {
    api.deleteMovie(movie.id, {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }).then(() => {
      setSavedMovies((movies) => movies.filter((m) => m.id !== movie.id));
    }).catch(err => console.log(err))
  }

  function showLoader(isLoaderOpen) {
    isLoaderOpen ? setIsLoaderOpen(true) : setIsLoaderOpen(false);
  }

  function showNoResult(searchResult) {
    searchResult.length === 0 ? setNoResult(true) : setNoResult(false);
  }

  function getAllMovies(searchQuery) {
    moviesApi.getAllMovies()
        .then((movies) => {
          const moviesWithData = deleteNullDataMovies(movies);
          const moviesChangedUrl = changeImageUrl(moviesWithData);
          showLoader(true);
          localStorage.setItem('movies', JSON.stringify(moviesChangedUrl));
          return moviesChangedUrl;
        })
        .then((moviesChangedUrl) => {
          searchMovie(searchQuery, moviesChangedUrl);
        })
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => {
          setTimeout(() => {
            showLoader(false);
          }, 400);
        });
  }

  function searchMovie(searchQuery, movies) {
    const searchResult = movies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(searchQuery) !== -1
    );
    if (location.pathname === '/movies') {
      localStorage.setItem('searchResult', JSON.stringify(searchResult));
      setSearchResult(searchResult);
    } else {
      setSavedMoviesSearchResult(searchResult);
    }
    showNoResult(searchResult);
  }

  function handleSearch(searchQuery) {
    const searchQueryLowerCase = searchQuery.toLowerCase();
    const movies = JSON.parse(localStorage.getItem('movies'));

    if (location.pathname === '/movies' && movies === null) {
      getAllMovies(searchQueryLowerCase);
    } else {
      showLoader(true);
      setTimeout(() => {
        showLoader(false);
        if (location.pathname === '/movies') {
          searchMovie(searchQueryLowerCase, movies);
        } else {
          searchMovie(searchQueryLowerCase, savedMovies);
        }
      }, 400);
    }
    setNoResult(false);
  }

  React.useEffect(() => {
    setIsLoaderOpen(false);
    setNoResult(false);
    setSavedMoviesSearchResult([]);
    setErrorMessage('');
    setShortFilter(false);
  }, [location]);

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('searchResult'));
    setSearchResult(movies);
  }, []);

  // React.useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([
  //       api.getInfo({
  //         authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json',
  //       }),
  //       api.getSavedMovies({
  //         authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json',
  //       }),
  //     ]).then(([info, movies]) => {
  //       setCurrentUser(info);
  //       setSavedMovies(movies);
  //     })
  //       .catch((err) => {
  //         // localStorage.removeItem('token');
  //         localStorage.removeItem('movies');
  //         localStorage.removeItem('searchResult');
  //         setSearchResult([]);
  //         setSavedMovies([]);
  //         setSavedMoviesSearchResult([]);
  //         setLoggedIn(false);
  //       })
  //   }
  // }, [loggedIn])

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.getUser(token).then((user) => {
        if (user.email) {
          setUserData({ email: user.email, name: user.name, _id: user._id });
          setLoggedIn(true);
          history.push('/movies');
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

          <ProtectedRoute path="/movies"
            component={Movies}
            onSearch={handleSearch}
            loggedIn={loggedIn}
            handleMovieLike={handleMovieLike}
            handleMovieDelete={handleMovieDelete}
            savedMovies={savedMovies}
            searchResult={searchResult || []}
            noResult={noResult}
            errorMessage={errorMessage}
            isLoaderOpen={isLoaderOpen}
            toggleShortFilter={toggleShortFilter}
            shortFilter={shortFilter}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            handleMovieLike={handleMovieLike}
            handleMovieDelete={handleMovieDelete}
            savedMoviesSearchResult={savedMoviesSearchResult || []}
            isLoaderOpen={isLoaderOpen}
            noResult={noResult}
            toggleShortFilter={toggleShortFilter}
            shortFilter={shortFilter}
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
                errorMessage={errorMessage}
              />
            </div>
          </Route>

          <Route path="/signup">
            <div className="register__container">
              <Register
                onRegister={handleRegister}
                isLoading={isLoading}
                errorMessage={errorMessage}
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

        <InfoTool isOpen={isInfoToolOpen} isSuccesful={isSuccesful} onClose={closeInfotool} />

        <MenuPopup />

        <Footer />
      </div>
    </CurrentUserContext.Provider >
  )
}

export default App;
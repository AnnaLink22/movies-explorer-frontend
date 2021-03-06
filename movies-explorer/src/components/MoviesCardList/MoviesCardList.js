import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';

function MoviesCardList({
  isLoaderOpen,
  handleMovieLike,
  savedMovies,
  searchResult,
  noResult,
  errorMessage,
  shortFilter,
  savedMoviesSearchResult,
}) {

  const location = useLocation();
  const [cardsAmount, setCardsAmount] = React.useState(0);
  const [addedCards, setAddedCards] = React.useState(0);
  const [moreBtnVisible, setMoreBtnVisible] = React.useState(false);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const btnClass = `${moreBtnVisible ? 'movies__more-btn' : 'movies__more-btn_invisible'}`;

  const getCardsIndex = useCallback(() => {
    if (windowSize < 2000) {
      setCardsAmount(12);
      setAddedCards(3);
    }
    if (windowSize < 900) {
      setCardsAmount(8);
      setAddedCards(2);
    }
    if (windowSize < 600) {
      setCardsAmount(5);
      setAddedCards(1);
    }
  }, [windowSize]);

  const btnMoreClick = () => {
    if (cardsAmount < searchResult.length) {
      setCardsAmount(cardsAmount + addedCards);
    }
  }

  const filterShortMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  function renderMovies(searchResult, savedMovies, savedMoviesSearchResult) {
    if (!shortFilter) {
      return location.pathname === '/movies'
        ? searchResult.slice(0, cardsAmount) || []
        : savedMoviesSearchResult.length > 0
        ? savedMoviesSearchResult : savedMovies;
    } else {
      return location.pathname === '/movies'
        ? filterShortMovies(searchResult).slice(0, cardsAmount) || []
        : savedMoviesSearchResult.length > 0
          ? filterShortMovies(savedMoviesSearchResult)
          : filterShortMovies(savedMovies)
    }
  };

  const renderedMovies = renderMovies(searchResult, savedMovies, savedMoviesSearchResult);

  const toggleMoreBtn = useCallback((movies, renderedMovies) => {
    if (!shortFilter) {
      movies.length <= cardsAmount ? setMoreBtnVisible(false) : setMoreBtnVisible(true);
    } else {
      renderedMovies.length <= cardsAmount ? setMoreBtnVisible(false) : setMoreBtnVisible(true);
    }
  }, [cardsAmount, shortFilter]);

  useEffect(() => {
    if (location.pathname === '/movies') {
      toggleMoreBtn(searchResult, renderedMovies);
    }
  }, [location.pathname, searchResult, toggleMoreBtn, renderedMovies]);

  React.useEffect(() => {
    getCardsIndex();
  }, [getCardsIndex]);

  function getWindowSize() {
    setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 1000);
  }

  React.useEffect(() => {
    getWindowSize();
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, []);

  return (
    <section className="movies__section">
      {isLoaderOpen && <Preloader />}

      {!isLoaderOpen && shortFilter && renderedMovies.length === 0 && (
        <div className="movies__no-result">
          <p className="movies__no-result-text">???????????????????????????????? ?????????????? ???? ??????????????</p>
        </div>
      )}

      {!isLoaderOpen && shortFilter && noResult && (
        <div className="movies__no-result">
          <p className="movies__no-result-text">???????????????????????????????? ?????????????? ???? ??????????????</p>
        </div>
      )}

      {!isLoaderOpen && !shortFilter && noResult && (
        <div className="movies__no-result">
          <p className="movies__no-result-text">???????????? ???? ??????????????</p>
        </div>
      )}

      {!isLoaderOpen && errorMessage && noResult && (
        <div className="movies__no-result">
          <p className="movies__no-result-text">{errorMessage}</p>
        </div>
      )}


      <ul className="movies__grid">
        {!isLoaderOpen && renderedMovies.map((item) =>
          <MoviesCard
            movie={item}
            key={item.id || item._id}
            handleMovieLike={handleMovieLike}
            savedMovies={savedMovies}
          />)
        }
      </ul>
      <button onClick={btnMoreClick} type="button" className={btnClass}>??????</button>
    </section>


  )
}

export default MoviesCardList;
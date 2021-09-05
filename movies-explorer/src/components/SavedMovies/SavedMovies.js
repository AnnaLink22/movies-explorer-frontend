import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies({
    loggedIn,
    savedMovies,
    onSearch,
    handleMovieLike,
    handleMovieDelete,
    savedMoviesSearchResult,
    isLoaderOpen,
    noResult,
    errorMessage,
    toggleShortFilter,
    shortFilter
}) {
    return (
        <section className="saved-movies">
            <SearchForm onSearch={onSearch} toggleShortFilter={toggleShortFilter} />
            <MoviesCardList
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              handleMovieLike={handleMovieLike}
              handleMovieDelete={handleMovieDelete}
              savedMoviesSearchResult={savedMoviesSearchResult}
              isLoaderOpen={isLoaderOpen}
              noResult={noResult}
              errorMessage={errorMessage}
              shortFilter={shortFilter}  
            />
        </section>
    )
}

export default SavedMovies;
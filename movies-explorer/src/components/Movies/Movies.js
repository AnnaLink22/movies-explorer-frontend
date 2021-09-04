import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies({
    isLoaderOpen,
    onSearch,
    handleMovieLike,
    handleMovieDelete,
    savedMovies,
    searchResult,
    noResult,
    errorMessage,
    shortFilter,
    toggleShortFilter,
    savedMoviesSearchResult,
}) {
    return (
        <section className="movies">
            <SearchForm onSearch={onSearch} toggleShortFilter={toggleShortFilter} />
            <MoviesCardList
                isLoaderOpen={isLoaderOpen}
                handleMovieLike={handleMovieLike}
                handleMovieDelete={handleMovieDelete}
                savedMovies={savedMovies}
                searchResult={searchResult}
                noResult={noResult}
                savedMoviesSearchResult={savedMoviesSearchResult}
                errorMessage={errorMessage}
                shortFilter={shortFilter}
            />
        </section>
    )
}

export default Movies;
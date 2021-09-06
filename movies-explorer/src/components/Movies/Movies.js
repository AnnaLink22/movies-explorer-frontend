import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies({
    isLoaderOpen,
    onSearch,
    handleMovieLike,
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
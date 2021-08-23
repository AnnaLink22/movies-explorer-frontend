import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies({movies, handleMovieLike}) {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList movies={movies} onCardClick={handleMovieLike} />
        </section>
    )
}

export default Movies;
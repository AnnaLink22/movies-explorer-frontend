import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default Movies;
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies() {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;
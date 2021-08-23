import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies({loggedIn, likedMovies}) {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList saved={true} movies={likedMovies}/>
        </section>
    )
}

export default SavedMovies;
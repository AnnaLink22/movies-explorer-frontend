import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ movies, saved, onCardClick, onCardLike, onCardDelete }) {
    return (
        <section className="movies__section">
            <ul className="movies__grid">
                {movies.map(item =>
                    <MoviesCard
                        saved={saved}
                        name={item.name}
                        time={item.time}
                        pic={item.image}
                        link={item.trailerLink}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />)
                }
            </ul>
            <button type="button" className="movies__more-btn">Ещё</button>
        </section>


    )
}

export default MoviesCardList;
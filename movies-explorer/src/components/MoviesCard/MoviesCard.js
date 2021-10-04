import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCard({ 
    movie, 
    handleMovieLike,
    savedMovies,
    }) {
    
    const location = useLocation();

    const [isSaved, setIsSaved] = React.useState(false);

    const movieDuration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

    function onSaveOrDelete() {
        handleMovieLike(movie);
    };
    
    function checkIfSaved(savedMovies, movie) {
        return savedMovies.some((i) => i.nameRU === movie.nameRU);
    };

    React.useEffect(() => {
        const result = checkIfSaved(savedMovies, movie);
        setIsSaved(result);
    }, [savedMovies, movie]);

    return (
        <li className="movies__card">
            <a className="movies__card-link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img 
                src={`${ movie.image.url || movie.image}`}
                alt={movie.nameRU} className="movies__pic" 
                />
            </a>
            <div className="movies__card-container">
                <div className="movies__card-text">
                    <p className="movies__card-name">{movie.nameRU}</p>
                    <p className="movies__card-time">{movieDuration}</p>
                </div>
                   
                <button 
                onClick={onSaveOrDelete} 
                type="button" 
                className={`movies__btn ${isSaved && 'movies__btn_save'} 
                ${location.pathname === '/saved-movies' && 'movies__btn_delete'}`}
                ></button> 
            </div>
        </li>
    )
}

export default MoviesCard;
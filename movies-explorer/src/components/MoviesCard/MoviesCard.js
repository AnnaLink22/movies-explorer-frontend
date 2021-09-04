import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCard({ 
    movie, 
    handleMovieLike, 
    handleMovieDelete, 
    savedMovies }) {
    
    const location = useLocation();

    const [isSaved, setIsSaved] = React.useState(false);

    const movieDuration = `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`;

    function onSave() {
        handleMovieLike(movie);
    };

    function onDelete() {
        handleMovieDelete(movie);
    };
    
    function checkIfSaved(savedMovies, movie) {
        return savedMovies.some((i) => i.nameRU === movie.nameRU);
    };

    React.useEffect(() => {
        const saved = checkIfSaved(savedMovies, movie);
        setIsSaved(saved);
    }, [savedMovies, movie]);

    return (
        <li className="movies__card">
            <a className="movies__card-link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img src={movie.image.url} alt={movie.nameRU} className="movies__pic" />
            </a>
            <div className="movies__card-container">
                <div className="movies__card-text">
                    <p className="movies__card-name">{movie.nameRU}</p>
                    <p className="movies__card-time">{movieDuration}</p>
                </div>
                { location.pathname === '/movies' && (
                   <button onClick={isSaved ? onDelete : onSave} type="button" className={`${isSaved ? 'movies__like_active' : 'movies__like'}`}></button> 
                )
                }
                { location.pathname === '/saved-movies' && (
                    <button onClick={onDelete} type="button" className='movies__delete'></button>
                )}
            </div>
        </li>
    )
}

export default MoviesCard;
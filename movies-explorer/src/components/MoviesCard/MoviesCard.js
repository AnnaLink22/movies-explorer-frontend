function MoviesCard({ name, time, pic, saved }) {
    
    const btnClassName = ( saved ? 'movies__delete' : 'movies__like' );
    
    return (
        <li className="movies__card">
            <a className="movies__card-link" href="#" target="_blank" rel="noreferrer">
                <img src={pic} alt={name} className="movies__pic" />
            </a>
            <div className="movies__card-container">
                <div className="movies__card-text">
                    <p className="movies__card-name">{name}</p>
                    <p className="movies__card-time">{time}</p>
                </div>
                <button type="button" className={btnClassName}></button>
            </div>
        </li>
    )
}

export default MoviesCard;
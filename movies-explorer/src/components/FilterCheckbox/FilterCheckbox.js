function FilterCheckbox({toggleShortMovieFilter}) {
    return (
        <label className="checkbox">
            <input type="checkbox" onChange={toggleShortMovieFilter} className="invisible-checkbox" value="short-movie" />
            <span className="visible-checkbox"><div className="checkbox__circle"></div></span>
            <p className="checkbox__subtitle">Короткометражки</p>
        </label>
    )
}

export default FilterCheckbox;

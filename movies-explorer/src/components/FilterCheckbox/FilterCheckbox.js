function FilterCheckbox({toggleShortFilter}) {
    return (
        <label className="checkbox">
            <input type="checkbox" id='checkbox' onChange={toggleShortFilter} className="invisible-checkbox" value="short-movie" />
            <span className="visible-checkbox"><div className="checkbox__circle"></div></span>
            <p className="checkbox__subtitle">Короткометражки</p>
        </label>
    )
}

export default FilterCheckbox;

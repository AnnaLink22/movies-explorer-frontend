import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
    return (
        <section className="searchform">
            <fieldset className="searchform__fieldset">
                <div className="searchform__container">
                    <div className="searchform__icon"></div>
                    <input required minLength="1" maxLength="30" type="text" id='movie-name' name="movie-name" placeholder="Фильм" className="searchform__input" />
                    <div className="searchform__btn">Найти</div>
                </div>
                <FilterCheckbox />
            </fieldset>
        </section>
    )
}

export default SearchForm;
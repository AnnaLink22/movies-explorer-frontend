import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import useFormWithValidation from "../Validation/Validation.js";
import React from 'react';

function SearchForm({ onSearch, toggleShortFilter }) {

    const { values, handleChange, isValid } = useFormWithValidation();

    const [errorMessage, setErrorMessage] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (values.movie) {
            onSearch(values.movie);
            hideErrorMessage();
        } else {
            showErrorMessage();
        }

    }

    React.useEffect(() => {
        if (values.movie !== '') {
            hideErrorMessage();
        } else {
            showErrorMessage();
        }
    }, [values.movie]);

    function hideErrorMessage() {
        setErrorMessage('');
    }

    function showErrorMessage() {
        setErrorMessage('Нужно ввести ключевое слово');
    }

    const btnClass = `${isValid ? 'searchform__btn' : 'searchform__btn searchform__btn_inactive'}`;

    const inputClass = `${isValid ? 'searchform__input' : 'searchform__input searchform__input-error_active'}`;

    return (
        <section className="searchform">
            <form onSubmit={handleSubmit} action="#" name="searchform" className="searchform__form" noValidate >
                <fieldset className="searchform__fieldset">
                    <div className="searchform__container">
                        <div className="searchform__icon"></div>
                        <div className="searchform__box">
                            <input 
                            required 
                            minLength="1" 
                            onChange={handleChange} 
                            value={values.movie || ''} 
                            maxLength="30" 
                            type="text" 
                            id='movie' 
                            name="movie" 
                            placeholder="Фильм" 
                            className={inputClass}
                            />
                            <span className='searchform__error'>{errorMessage}</span>
                        </div>
                        <button type="submit" className={btnClass}>Найти</button>
                    </div>
                    <FilterCheckbox toggleShortFilter={toggleShortFilter} />
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;
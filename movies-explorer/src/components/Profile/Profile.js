import React from 'react';
import useFormWithValidation from '../Validation/Validation.js';

function Profile({ onUpdate, email, name, onSignout }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdate(values);
    }

    const btnClass = `${isValid ? 'profile__button profile__button_active' : 'profile__button'}`;

    const inputClass = `${isValid ? 'profile__input' : 'profile__input profile__input-error_active'}`;

    return (
        <section className="profile">
            <div className="profile__container">
                <h3 className="profile__greeting">Привет, Анна!</h3>
                <form onSubmit={handleSubmit} action="#" name="profile" className="profile__form" noValidate>
                    <fieldset className="profile__form-set">
                        <div className="profile__text-container">
                            <label className="profile__input-label">Имя</label>
                            <input value={values.name || name} autoComplete="name" onChange={handleChange} required minLength="2" maxLength="40" type="name" id='profile-name' name="name" className={inputClass} />
                        </div>
                        <span className="profile__error" id='profile-name-error'>{errors.name}</span>
                        <div className="profile__text-container">
                            <label className="profile__input-label">E-mail</label>
                            <input required minLength="2" maxLength="40" type="email" id='profile-email' name="email" value={values.email || email} autoComplete="email" onChange={handleChange} className={inputClass} />
                        </div>
                        <span className="profile__error" id='profile-email-error'>{errors.email}</span>
                        <button type="submit" onClick={resetForm} className={btnClass}>Редактировать</button>
                    </fieldset>
                </form>
                <button type="button" onClick={onSignout} className="profile__logout">Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile;

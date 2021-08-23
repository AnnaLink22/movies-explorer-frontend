import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../Validation/Validation.js';

function Register({ onRegister, isLoading, message }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values);
    }

    const btnClass = `${isValid ? 'register__button register__button_active' : 'register__button'}`;

    const inputClass = `${isValid ? 'register__input' : 'register__input register__input-error_active'}`;

    return (
        <>
            <form onSubmit={handleSubmit} action="#" name="register" className="register__form" noValidate>
                <fieldset className="register__form-set">
                    <label className="register__input-label">Имя</label>
                    <input value={values.name || ""} autoComplete="email" onChange={handleChange} required minLength="2" maxLength="40" type="name" id='register-name' name="name" className={inputClass} />
                    <span className="register__error" id='register-name-error'>{errors.name}</span>
                    <label className="register__input-label">E-mail</label>
                    <input required minLength="2" maxLength="40" type="email" id='register-email' name="email" value={values.email || ""} autoComplete="current-email" onChange={handleChange} className={inputClass} />
                    <span className="register__error" id='register-email-error'>{errors.email}</span>
                    <label className="register__input-label">Пароль</label>
                    <input required minLength="8" maxLength="40" type="password" id='register-password' name="password" value={values.password || ""} autoComplete="current-password" onChange={handleChange} className={inputClass} />
                    <span className="register__error register__error_active" id='register-password-error'>{errors.password}</span>
                </fieldset>
                <span className="register__error register__error_active" id='register-error'>{message}</span>
                <button type="submit" className={btnClass}>{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}</button>
                <div className="register__subtitle">
                    <p className="register__subtitle-text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__signin-link">Войти</Link>
                </div>
            </form>
        </>
    )
}

export default Register;
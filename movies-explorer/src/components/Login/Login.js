import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../Validation/Validation.js';

function Login({ onLogin, isLoading }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
    }
    
    const btnClass = `${isValid ? 'login__button login__button_active' : 'login__button'}`;

    const inputClass = `${isValid ? 'login__input' : 'login__input login__input-error_active'}`;

    return (
        <>
            <form onSubmit={handleSubmit} action="#" name="login" className="login__form" noValidate>
                <fieldset className="login__form-set">
                    <label className="login__input-label">E-mail</label>
                    <input required minLength="2" maxLength="40" type="email" id='login-email' name="email" value={values.email || ""} autoComplete="email" onChange={handleChange} className={inputClass} />
                    <span className="login__error" id='login-email-error'>{errors.email}</span>
                    <label className="login__input-label">Пароль</label>
                    <input required minLength="8" maxLength="40" type="password" id='login-password' name="password" value={values.password || ""} autoComplete="current-password" onChange={handleChange} className={inputClass} />
                    <span className="login__error login__error_active" id='login-password-error'>{errors.password}</span>
                </fieldset>
                <button type="submit" className={btnClass}>{isLoading ? 'Загрузка...' : 'Войти'}</button>
                <div className="login__subtitle">
                    <p className="login__subtitle-text">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__signup-link">Регистрация</Link>
                </div>
            </form>
        </>
    )
}

export default Login;
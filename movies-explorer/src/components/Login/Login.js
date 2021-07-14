import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <form action="#" name="login" className="login__form" noValidate>
                <fieldset className="login__form-set">
                    <label className="login__input-label">E-mail</label>
                    <input required minLength="2" maxLength="40" type="email" id='login-email' name="email" value='pochta@yandex.ru' className="login__input login__input_email" />
                    <span className="login__error" id='login-email-error'></span>
                    <label className="login__input-label">Пароль</label>
                    <input required minLength="8" maxLength="40" type="password" id='login-password' name="password" value='2323343423' className="login__input login__input_password login__input-error_active" />
                    <span className="login__error login__error_active" id='login-password-error'>Что-то пошло не так...</span>
                </fieldset>
                <button type="submit" className="login__button">Войти</button>
                <div className="login__subtitle">
                    <p className="login__subtitle-text">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__signup-link">Регистрация</Link>
                </div>
            </form>
        </>
    )
}

export default Login;
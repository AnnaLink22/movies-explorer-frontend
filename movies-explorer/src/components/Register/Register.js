import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <form action="#" name="register" className="register__form" noValidate>
                <fieldset className="register__form-set">
                    <label className="register__input-label">Имя</label>
                    <input value='Anna' required minLength="2" maxLength="40" type="name" id='register-name' name="name" className="register__input register__input_name" />
                    <span className="register__error" id='register-name-error'></span>
                    <label className="register__input-label">E-mail</label>
                    <input required minLength="2" maxLength="40" type="email" id='register-email' name="email" value='pochta@yandex.ru' className="register__input register__input_email" />
                    <span className="register__error" id='register-email-error'></span>
                    <label className="register__input-label">Пароль</label>
                    <input required minLength="8" maxLength="40" type="password" id='register-password' name="password" value='2323343423' className="register__input register__input_password register__input-error_active" />
                    <span className="register__error register__error_active" id='register-password-error'>Что-то пошло не так...</span>
                </fieldset>
                <button type="submit" className="register__button">Зарегистрироваться</button>
                <div className="register__subtitle">
                    <p className="register__subtitle-text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__signin-link">Войти</Link>
                </div>
            </form>
        </>
    )
}

export default Register;
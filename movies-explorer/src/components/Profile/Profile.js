import React from 'react';
import useFormWithValidation from '../Validation/Validation.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ onUpdate, onSignout, succesMessage, errorMessage }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [noNameChanges, setNoNameChanges] = React.useState(true);
    const [noEmailChanges, setNoEmailChanges] = React.useState(true);
    const { name, email } = React.useContext(CurrentUserContext);

    function checkNameChange(e) {
        handleChange(e);
        name === e.target.value ? setNoNameChanges(true) : setNoNameChanges(false);
    }

    function checkEmailChange(e) {
        handleChange(e);
        email === e.target.value ? setNoEmailChanges(true) : setNoEmailChanges(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const userData = {name: values.name || name, email: values.email || email };
        onUpdate(userData);
        setNoNameChanges(true);
        setNoEmailChanges(true);
    }

    const btnClass = `${isValid ? 'profile__button profile__button_active' : 'profile__button'}`;

    const spanClass = `${errorMessage ? 'profile__message profile__message_error' : 'profile__message'}`;

    return (
        <section className="profile">
            <div className="profile__container">
                <h3 className="profile__greeting">{`Привет, ${name}!`}</h3>
                <form onSubmit={handleSubmit} action="#" name="profile" className="profile__form" noValidate>
                    <fieldset className="profile__form-set">
                        <div className="profile__text-container">
                            <label className="profile__input-label">Имя</label>
                            <input defaultValue={values.name || name} onChange={checkNameChange} required minLength="2" maxLength="40" type="name" id='profile-name' name="name" className="profile__input" />
                        </div>
                        <span className="profile__error" id='profile-name-error'>{errors.name}</span>
                        <div className="profile__text-container">
                            <label className="profile__input-label">E-mail</label>
                            <input required minLength="2" maxLength="40" type="email" id='profile-email' name="email" defaultValue={values.email || email} onChange={handleChange} className="profile__input" />
                        </div>
                        <span className="profile__error" id='profile-email-error'>{errors.email}</span>
                        <span className={spanClass} >{`${ succesMessage || errorMessage }`}</span>
                        <button type="submit" disabled={!isValid || (noNameChanges && noEmailChanges)} onClick={checkEmailChange} className={btnClass}>Редактировать</button>
                    </fieldset>
                </form>
                <button type="button" onClick={onSignout} className="profile__logout">Выйти из аккаунта</button>
            </div>
        </section>
    )
}



export default Profile;

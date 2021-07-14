function Profile() {
    return (
        <section className="profile">
            <div className="profile__container">
            <h3 className="profile__greeting">Привет, Анна!</h3>
            <div className="profile__text-container">
                <p className="profile__text">Имя</p>
                <p className="profile__value">Анна</p>
            </div>
            <div className="profile__text-container">
                <p className="profile__text">E-mail</p>
                <p className="profile__value">annlink2212@gmail.com</p>
            </div>
            <button type="button" className="profile__edit">Редактировать</button>
            <button type="button" className="profile__logout">Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile;

const onError = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor(config) {
        this._url = config.url;
    }

    getInfo(headers) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: headers
        }).then(onError)
    }

    saveUserInfo(userName, userEmail, headers) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                name: userName,
                email: userEmail
            })
        }).then(onError)
    }

    getSavedMovies(headers) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: headers
        }).then(onError)
    }

    saveNewMovie(movie, headers) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                country: movie.country,
                director: movie.director,
                description: movie.description,
                year: movie.year,
                duration: movie.duration,
                movieId: movie.id,
                image: movie.image.url,
                trailerLink: movie.trailerLink
            })
        }).then(onError)
    }


    deleteMovie(movieId, headers) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: headers,
        })
            .then(onError)
    }
}

const api = new Api({
    url: 'https://api.skyblue.nomoredomains.icu',
});

export default api;
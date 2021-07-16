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
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: headers
        }).then(onError)
    }

    saveUserInfo(userName, userAbout, headers) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                name: userName,
                about: userAbout
            })
        }).then(onError)
    }



    getAllMovies(headers) {
        return fetch(`${this._url}movies`, {
            method: 'GET',
            headers: headers
        }).then(onError)
    }

    saveNewMovie(name, link, headers) {
        return fetch(`${this._url}movies`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(onError)
    }


    deleteMovie(movieId, headers) {
        return fetch(`${this._url}movies/${movieId}`, {
            method: "DELETE",
            headers: headers,
        })
            .then(onError)
    }

    changeMovieLikeStatus(movieId, isLiked, headers) {
        return fetch(`${this._url}movies/${movieId}/likes`, {
            method: isLiked ? "PUT" : "DELETE",
            headers: headers,
        })
            .then(onError)
    }
}

const api = new Api({
    url: 'https://api.joanna.wang.students.nomoredomains.icu/',
});

export default api;
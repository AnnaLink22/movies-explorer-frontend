const onError = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

class mApi {
    constructor(config) {
        this._url = config.url;
    }

    getAllMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(onError)
    }
}

const moviesApi = new mApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies/',
});

export default moviesApi;
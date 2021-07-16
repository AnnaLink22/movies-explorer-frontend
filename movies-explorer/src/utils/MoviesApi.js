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

    getInfo(headers) {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: headers
        }).then(onError)
    }
}

const moviesApi = new mApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies/',
});

export default moviesApi;
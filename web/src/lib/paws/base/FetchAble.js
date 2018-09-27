class FetchAble {
    constructor({
        baseUrl = null, 
        auth = null,
        handleResponse = this._handleResponse
    } = {})  {
        this.url = null;
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.handleResponse = handleResponse;
    }
    _fetch({
        method = 'GET', 
        auth = false,
        headers = this.getHeaders(),
        body = null,
        options = {},
    }) {
        headers = this.getHeaders(headers, auth);
        return fetch(this.baseUrl + this.url, {
            method,
            headers,
            body,
            ...options,
        }).then(this.handleResponse); 
    }
    getHeaders(headers = null, auth = false) {
        if (headers == null) {
            headers = new Headers();
            headers.set('Content-Type', 'application/json');
            return headers;
        } else {
            if (auth) {
                headers.set('Authorization', 'Bearer ' + this.auth);
            }
            return headers;
        }
    }
    _handleResponse(response) {
        return response.json().then(json => {
            const status = json.status
            switch (status) {
                case 401:
                    break;
                case 422:
                    break;
            }
            return json.data;
        });
    }
}
export default FetchAble;
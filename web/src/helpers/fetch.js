import router from '@/router'
import Vue from 'vue'
import store from '@/store'

export default ({
    method = 'GET', 
    url = null, 
    auth = false,
    headers = getHeaders(),
    body = null,
    options = {},
}) => { 
    // console.log(store);
    headers = getHeaders(headers, auth);
    return fetch(url, {
        method,
        headers,
        body,
        ...options,
    }).then(handleResponse); 
}

function getHeaders(headers = null, auth = false)
{
    if (headers == null) {
        headers = new Headers();
        headers.set('Content-Type', 'application/json');
        return headers;
    } else {
        if (auth) {
            const user = store.state.auth.token;
            const token = user.token;
            headers.set('Authorization', 'Bearer ' + token);
        }
        return headers;
    }
}

function handleResponse(response) {
    return response.json().then(json => {
        const status = json.status
        switch (status) {
            case 401:
                handle401Response(json);
                break;
            case 422:
                return handle422Response(json);
        }
        return json.data;
    });
}

function handle401Response(json) {
    localStorage.removeItem('user');
    router.push('/login');
}

function handle422Response(json) {
    return Promise.reject(json);
}
import handleResponse from '@/helpers/handleResponse'

export default {
    login
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch (config.constant.API_AUTH_LOGIN, requestOptions)
        .then(handleResponse)
        .then(user =>  user);
}
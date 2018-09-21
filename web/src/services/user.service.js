import handleResponse from '@/helpers/handleResponse'
import fetch from '@/helpers/fetch'

export default {
    login
}

function login(username, password) {
    return fetch ({
        url: config.constant.API_AUTH_LOGIN,
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });
}
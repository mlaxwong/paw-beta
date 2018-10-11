import fetch from '@/helpers/fetch'

export default {
    login,
    getAll,
    create,
    getOne,
}

function login(username, password) {
    return fetch ({
        url: globalConfig.constant.API_AUTH_LOGIN,
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });
}

function getAll() {
    return fetch ({
        url: globalConfig.constant.API_USER,
        auth: true,
    });
}

function getOne(id) {
    return fetch ({
        url: globalConfig.constant.API_USER + '/' + id,
        auth: true,
    }); 
}

function create(username, email, password) {
    return fetch ({
        url: globalConfig.constant.API_USER,
        method: 'POST',
        auth: true,
        body: JSON.stringify({ username, email, password}),
    });
}
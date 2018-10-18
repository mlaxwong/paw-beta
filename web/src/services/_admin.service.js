import fetch from '@/helpers/fetch'

export default {
    getAll,
    create,
    getOne,
    remove,
}

function getAll() {
    return fetch ({
        url: globalConfig.constant.API_ADMIN,
        auth: true,
    });
}

function getOne(id) {
    return fetch ({
        url: globalConfig.constant.API_ADMIN + '/' + id,
        auth: true,
    }); 
}

function create(username, email, password, confirmPassword, name) {
    return fetch ({
        url: globalConfig.constant.API_ADMIN,
        method: 'POST',
        auth: true,
        body: JSON.stringify({username, email, password, confirmPassword, name}),
    });
}

function remove(id) {
    return fetch ({
        url: globalConfig.constant.API_ADMIN + '/' + id,
        method: 'DELETE',
        auth: true,
    }); 
}
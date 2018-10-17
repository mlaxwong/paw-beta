import fetch from '@/helpers/fetch'

export default {
    getAll,
    create,
    getOne,
    remove,
}

function getAll() {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER,
        auth: true,
    });
}

function getOne(id) {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER + '/' + id,
        auth: true,
    }); 
}

function create(username, email, password, confirmPassword) {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER,
        method: 'POST',
        auth: true,
        body: JSON.stringify({username, email, password, confirmPassword}),
    });
}

function remove(id) {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER + '/' + id,
        method: 'DELETE',
        auth: true,
    }); 
}
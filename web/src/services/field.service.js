import fetch from '@/helpers/fetch'

export default {
    getAll,
    create
}

function getAll() {
    return fetch ({
        url: globalConfig.constant.API_FIELD,
        auth: true,
    });
        // globalConfig.constant.API_FIELD, requestOptions)
        // .then(handleResponse)
        // .then(fields =>  fields);
}

function create(handle, name, config = {}) {
    return fetch ({
        url: globalConfig.constant.API_FIELD,
        method: 'POST',
        auth: true,
        body: JSON.stringify({ handle, name, config, config_class: 'testing' }),
    });
}
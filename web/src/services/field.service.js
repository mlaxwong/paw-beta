import handleResponse from '@/helpers/handleResponse'

export default {
    getAll
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch (config.constant.API_FIELD, requestOptions)
        .then(handleResponse)
        .then(fields =>  fields);
}
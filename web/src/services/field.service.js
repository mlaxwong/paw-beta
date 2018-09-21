import handleResponse from '@/helpers/handleResponse'
import fetch from '@/helpers/fetch'

export default {
    getAll
}

function getAll() {
    return fetch ({
        url: config.constant.API_FIELD
    });
        // config.constant.API_FIELD, requestOptions)
        // .then(handleResponse)
        // .then(fields =>  fields);
}
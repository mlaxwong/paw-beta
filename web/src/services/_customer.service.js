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

function create(name, companyName, phone, email, address, personalIncharge) {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER,
        method: 'POST',
        auth: true,
        body: JSON.stringify({name, companyName, phone, email, address, personalIncharge}),
    });
}

function remove(id) {
    return fetch ({
        url: globalConfig.constant.API_CUSTOMER + '/' + id,
        method: 'DELETE',
        auth: true,
    }); 
}
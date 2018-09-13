export default {
    login
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch ('http://localhost/mlaxology/packages/mlaxwong/paws-beta/dist/api/auth/login', requestOptions)
        .then(handleResponse)
        .then(user =>  user);
}

function handleResponse(response)
{
    return response.json().then(json => {
        if (!response.ok) {
            return Promise.reject(json);
        }
        return json;
    });
}
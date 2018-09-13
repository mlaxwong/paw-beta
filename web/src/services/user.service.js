export const userService = {
    login
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    fetch ('http://localhost/mlaxology/packages/mlaxwong/paws-beta/dist/api/auth/login', requestOptions)
    .then(response => {
        console.log(response);
    });
}
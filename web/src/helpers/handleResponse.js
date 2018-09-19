export default (response) => {
    return response.json().then(json => {
        if (!response.ok) {
            // this.$store.auth.logout();
            switch (response.status) {
                case 401:
                    console.log('auth error');
                    break;
            }
            return Promise.reject(json);
        }
        return json;
    });
}
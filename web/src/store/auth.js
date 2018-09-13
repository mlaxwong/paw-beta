import services from '@/services'

const state = {
    logging: false,
    user: null,
};

const actions = {
    login({ dispatch, commit }, {username, password}) {
        services.user.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    return user;
                },
                error => {
                    commit('loginFailure', error);
                    return error;
                }
            );
    }
};

const mutations = {
    loginRequest(state) {
        state.logging = true;
    },
    loginSuccess(state, user) {
        state.logging = false;
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    },
    loginFailure(state, error) {
        state.logging = false;
        state.user = null;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
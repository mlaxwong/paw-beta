import services from '@/services'

const state = {
    inited: false,
    logging: false,
    token: null,
    identity: {
        id: null,
        username: null,
    },
};

const actions = {
    login({ dispatch, commit }, {username, password}) {
        return services.user.login(username, password)
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
    },
    logout({ commit }) {
        commit('logout');
    },
    getIdentity({ commit }) {
        return services.user.getOne(state.token.id).then(identity => {
            commit('identitySuccess', identity);
            return identity;
        })
    }
};

const mutations = {
    _init(state) {
        if (localStorage.getItem('token') && state.token == null) {
            state.token = JSON.parse(localStorage.getItem('token'));
        }
    },
    loginRequest(state) {
        state.logging = true;
    },
    loginSuccess(state, user) {
        localStorage.setItem('token', JSON.stringify(user));
        state.logging = false;
        state.token = user;
    },
    loginFailure(state, error) {
        state.logging = false;
        state.token = null;
    },
    logout() {
        localStorage.removeItem('token');
        state.token = null;
    },
    identitySuccess(state, identity) {
        state.identity = identity;
    }
};

function getters() {
    getUser = state => state.token
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
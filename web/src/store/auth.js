import services from '@/services'
import router from '@/router'

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
                    return Promise.reject(error);
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
        try {
            if (localStorage.getItem(globalConfig.constant.AUTH_TOKEN_KEY) && state.token == null) {
                state.token = JSON.parse(localStorage.getItem(globalConfig.constant.AUTH_TOKEN_KEY));
            }

            // services.user.getOne(state.token.id).then(identity => {
            // }, error => {
            //     console.log(router);
            // })
        } catch (error) {
            console.log(error);
            localStorage.removeItem(globalConfig.constant.AUTH_TOKEN_KEY);
        }

    },
    loginRequest(state) {
        state.logging = true;
    },
    loginSuccess(state, user) {
        localStorage.setItem(globalConfig.constant.AUTH_TOKEN_KEY, JSON.stringify(user));
        state.logging = false;
        state.token = user;
    },
    loginFailure(state, error) {
        state.logging = false;
        state.token = null;
    },
    logout() {
        localStorage.removeItem(globalConfig.constant.AUTH_TOKEN_KEY);
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
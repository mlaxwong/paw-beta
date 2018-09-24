import services from '@/services'

const state = {
    logging: false,
    user: null,
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
    }
};

const mutations = {
    init(state) {
        if (localStorage.getItem('user') && state.user == null) {
            state.user = JSON.parse(localStorage.getItem('user'));
        }
    },
    loginRequest(state) {
        state.logging = true;
    },
    loginSuccess(state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.logging = false;
        state.user = user;
    },
    loginFailure(state, error) {
        state.logging = false;
        state.user = null;
    },
    logout() {
        localStorage.removeItem('user');
    }
};

function getters() {
    getUser = state => state.user
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
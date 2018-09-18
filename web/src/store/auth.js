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

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
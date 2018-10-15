import services from '@/services'

const state = {
    users: [],
};

const actions = {
    getAll({ commit }) {
        commit('addBLoader', 'vuex.user.getall', { root: true });
        return services.user.getAll()
            .then(users => {
                commit('getAllSuccess', users);
                commit('removeBLoader', 'vuex.user.getall', { root: true });
                return users;
            });
    },
    getOne({ commit }, id) {
        return services.user.getOne(id)
            .then(user => {
                commit('getAllSuccess', user);
                return user;
            });
    },
    create({ commit }, {username, email, password}) {
        return services.user.create(username, email, password);
    },
};

const mutations = {
    getAllRequest(state) {

    },
    getAllSuccess(state, users) {
        state.users = users;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
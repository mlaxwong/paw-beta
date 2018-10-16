import services from '@/services'

const state = {
    admins: [],
};

const actions = {
    getAll({ commit }) {
        commit('addBLoader', 'vuex.admin.getall', { root: true });
        return services.admin.getAll()
            .then(admins => {
                commit('removeBLoader', 'vuex.admin.getall', { root: true });
                commit('getAllSuccess', admins);
                return admins;
            });
    },
    getOne({ commit }, id) {
        return services.admin.getOne(id)
            .then(admin => {
                commit('getAllSuccess', admin);
                return admin;
            });
    },
    create({ commit }, {username, email, password, confirmPassword}) {
        commit('addBLoader', 'vuex.admin.create', { root: true });
        return services.admin.create(username, email, password, confirmPassword).then(admin => {
            commit('removeBLoader', 'vuex.admin.create', { root: true });
            return admin;
        }, error => {
            commit('removeBLoader', 'vuex.admin.create', { root: true });
            return Promise.reject(error);
        });
    },
    delete({ commit }, {index, admin}) {
        commit('addBLoader', 'vuex.admin.delete.' + admin.id, { root: true });
        return services.admin.remove(admin.id)
            .then(response => {
                commit('deleteSuccess', index);
                commit('removeBLoader', 'vuex.admin.delete.' + admin.id, { root: true });
                return true;
            });
    }
};

const mutations = {
    getAllRequest(state) {

    },
    getAllSuccess(state, admins) {
        state.admins = admins;
    },
    deleteSuccess(state, index) {
        state.admins.splice(index);
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
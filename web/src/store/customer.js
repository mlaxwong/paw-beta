import services from '@/services'

const state = {
    customers: [],
};

const actions = {
    getAll({ commit }) {
        commit('addBLoader', 'vuex.customer.getall', { root: true });
        return services.customer.getAll()
            .then(customers => {
                commit('removeBLoader', 'vuex.customer.getall', { root: true });
                commit('getAllSuccess', customers);
                return customers;
            });
    },
    getOne({ commit }, id) {
        return services.customer.getOne(id)
            .then(customer => {
                commit('getAllSuccess', customer);
                return customer;
            });
    },
    create({ commit }, {name, companyName, phone, email, address, personalIncharge}) {
        commit('addBLoader', 'vuex.customer.create', { root: true });
        return services.customer.create(name, companyName, phone, email, address, personalIncharge).then(customer => {
            commit('removeBLoader', 'vuex.customer.create', { root: true });
            return customer;
        }, error => {
            commit('removeBLoader', 'vuex.customer.create', { root: true });
            return Promise.reject(error);
        });
    },
    delete({ commit }, {index, customer}) {
        commit('addBLoader', 'vuex.customer.delete.' + customer.id, { root: true });
        return services.customer.remove(customer.id)
            .then(response => {
                commit('deleteSuccess', index);
                commit('removeBLoader', 'vuex.customer.delete.' + customer.id, { root: true });
                return true;
            });
    }
};

const mutations = {
    getAllRequest(state) {

    },
    getAllSuccess(state, customers) {
        state.customers = customers;
    },
    deleteSuccess(state, index) {
        state.customers.splice(index);
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
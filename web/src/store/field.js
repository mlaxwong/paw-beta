import services from '@/services'

const state = {
    fields: null,
};

const actions = {
    getAll({ commit }) {
        return services.field.getAll();
    },
};

const mutations = {
    
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
import services from '@/services'

const state = {
    fields: null,
};

const actions = {
    getAll({ commit }) {
        return services.field.getAll();
    },
    create({ commit }, {handle, name, config = {}}) {
        return services.field.create(handle, name, config);
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
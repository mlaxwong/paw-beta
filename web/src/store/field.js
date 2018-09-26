import services from '@/services'

const state = {
    fields: [],
};

const actions = {
    getAll({ commit }) {
        return services.field.getAll()
            .then(fields => {
                commit('getAllSuccess', fields);
                return fields;
            });
    },
    create({ commit }, {handle, name, config = {}}) {
        return services.field.create(handle, name, config);
    },
};

const mutations = {
    getAllRequest(state) {},
    getAllSuccess(state, fields) {
        state.fields = fields;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
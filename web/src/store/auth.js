import services from '@/services'

const state = {
    logged: false,
};

const actions = {
    login({ dispatch, commit }, {username, password}) {
        services.user.login(username, password);
        // userSerive.login(username, password);
    }
};

export default {
    namespaced: true,
    state,
    actions,
}
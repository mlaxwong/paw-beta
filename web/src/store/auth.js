import { userSerive } from '@/services'

const state = {
    logged: false,
};

const actions = {
    login({ dispatch, commit }, {username, password}) {
        console.log(username, password);
    }
};

export default {
    namespaced: true,
    state,
    actions,
}
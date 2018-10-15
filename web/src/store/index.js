import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import dom from './dom'
import nav from './nav'
import field from './field'
import user from './user'

Vue.use(Vuex);

let store;

const state = {
    loader: [],
    bloader: [],
}

const modules = {
    auth,
    dom,
    nav,
    field,
    user,
};

const mutations = {
    _init(state) {
        for (const key in Object.keys(this._mutations)) {
            const mutation = Object.keys(this._mutations)[key];
            if (mutation.match(/[a-z]+\/\_init/)) this.commit(mutation);
        }
    },
    addBLoader(state, key) {
        if (!(key in state.bloader)) state.bloader.push(key);
    },
    removeBLoader(state, key) {
        const index = state.bloader.indexOf(key); 
        if (index !== -1) state.bloader.splice(index, 1);
    },
    addLoader(state, key) {
        if (!(key in state.loader)) state.loader.push(key);
    },
    removeLoader(state, key) {
        const index = state.loader.indexOf(key); 
        if (index !== -1) state.loader.splice(index, 1);
    }
}

const config = {
    state,
    modules,
    mutations,
};

if (!store) {
    store = new Vuex.Store(config);
    store.commit('_init');
}

export default store;
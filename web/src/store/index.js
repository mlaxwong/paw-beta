import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import nav from './nav'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        nav
    }
})
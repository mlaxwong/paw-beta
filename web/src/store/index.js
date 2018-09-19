import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import nav from './nav'
import field from './field'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        nav,
        field,
    }
})
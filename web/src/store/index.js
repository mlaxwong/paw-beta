import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import nav from './nav'
import field from './field'
import counter from './counter'

Vue.use(Vuex);

let store;

const initStore = () =>  {
    return store || (store = new Vuex.Store({
        modules: {
            auth,
            nav,
            field,
            counter,
        }
    }))
}
export default initStore

// export default new Vuex.Store({
//     modules: {
//         auth,
//         nav,
//         field,
//         counter,
//     }
// })
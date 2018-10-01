import Vue from 'vue'
import App from './App'
import router from './router' 
import store from './store' 
import i18n from './i18n'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App />',
});
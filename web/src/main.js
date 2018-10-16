import Vue from 'vue'
import App from './App'
import router from './router' 
import store from './store' 
import i18n from './i18n'
import BootstrapVue from 'bootstrap-vue'
import VueFloatLabel from "vue-float-label";
import 'vue-awesome/icons'
import FontAwesome from 'vue-awesome/components/Icon'
import Vuebar from 'vuebar'
import VuejsDialog from "vuejs-dialog"

import 'vuejs-dialog/dist/vuejs-dialog.min.css'

Vue.use(BootstrapVue);
Vue.use(VueFloatLabel);
Vue.use(Vuebar);
Vue.use(VuejsDialog, {
    html: true, 
    loader: false,
    okText: 'Proceed',
    cancelText: 'Cancel',
    animation: 'fade', 
})

Vue.component('fa', FontAwesome)

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App />',
});
import Vue from 'vue'
import App from './App.vue'
import {button} from '../lib'
Vue.use(button)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
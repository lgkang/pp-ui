import Vue from 'vue'
import App from './App.vue'
import {PPButton} from '../packages'
Vue.use(PPButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

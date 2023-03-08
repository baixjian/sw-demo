import Vue from 'vue'
import App from './App.vue'
import runSwClient from './sw'
runSwClient()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

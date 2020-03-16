import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import "../node_modules/bootswatch/dist/darkly/bootstrap.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

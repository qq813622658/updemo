import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，再引入

 Vue.use(animated)

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')

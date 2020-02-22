import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
export default new Vuerouter ({
    routes: [
         {
            path : "/",
            component : () => import('@/view/ceshihome')
        },
        {
            path : "/home",
            component : () => import('@/view/home')
        },
        {
            path: '/ceshihome',
            component : () => import('@/view/ceshihome')
        }
    ]
})
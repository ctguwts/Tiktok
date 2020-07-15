import Vue from 'vue'
import  Router from 'vue-router'
Vue.use(Router)
import Home from  './views/home'

const router = new Router({
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home,
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:()=>import('./views/index/index.vue')
                },
                {
                    path:'/follow',
                    name:'follow',
                    component:()=>import('./views/follow/follow.vue')
                }
            ]
        }
    ]
})

export default router

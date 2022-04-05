import Home from "./components/Home.vue"
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/AddJob.vue'
import Update from './components/UpdateJob.vue'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: 'Login',
        component: Login,
        path: '/Login'
    },
    {
        name:'Add',
        component:Add,
        path:'/AddJob'
    },
    {
        name:'Update',
        component:Update,
        path:'/UpdateJob'
    },
    {
        name:'Update',
        component:Update,
        path:'/UpdateJob/:id'
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
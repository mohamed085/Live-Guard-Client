import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import VerifyAccount from "@/views/auth/VerifyAccount";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/verifyaccount/:code', component: VerifyAccount },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import Vuex from 'vuex'
import IndexPage from './pages/Index'
import mock from './mock/mock'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: IndexPage
    }]
})
Vue.config.productionTip = false
new Vue({
    el: "#app",
    router,
    template: '<Layout/>',
    components: { Layout }
})
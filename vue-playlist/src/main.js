// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import Vuex from 'vuex'
import IndexPage from './pages/Index'
import mock from './mock/mock'
import detail from './pages/Detail'
import Detailforecast from './pages/detail/forecast'
import Detailanalysis from './pages/detail/analysis'
import Detailcount from './pages/detail/count'
import Detailpublish from './pages/detail/publish'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: IndexPage
        },
        {
            path: '/detail',
            component: detail,
            redirect: '/detail/analysis',
            children: [{
                path: 'forecast',
                component: Detailforecast
            }, {
                path: 'analysis',
                component: Detailanalysis
            }, {
                path: 'count',
                component: Detailcount
            }, {
                path: 'publish',
                component: Detailpublish
            }]
        }
    ]
})
Vue.config.productionTip = false
new Vue({
    el: "#app",
    router,
    template: '<Layout/>',
    components: { Layout }
})
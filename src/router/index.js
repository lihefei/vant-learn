import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/index';
import Home from '@/views/home';
import News from '@/views/news';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    name: 'home',
                    component: Home,
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: '/news',
                    name: 'news',
                    component: News,
                    meta: {
                        title: '新闻'
                    }
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    ]
});

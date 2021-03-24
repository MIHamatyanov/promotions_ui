import Vue from 'vue'
import Router from 'vue-router'
//import store from '@/store';
//import constants from '@/constants';

import PromotionsList from './views/PromotionsList';
import EditPromotion from './views/EditPromotion';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/',
            name: 'PromotionsList',
            component: PromotionsList,
        },

        {
            path: '/promotion/:id',
            name: 'EditPromotion',
            props: true,
            component: EditPromotion,
        },

        {
            path: '/*',
            redirect: '/404'
        }
    ]
})



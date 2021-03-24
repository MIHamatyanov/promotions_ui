import Vue from 'vue'
import Vuex from 'vuex'
import promotions from './store/modules/promotions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        promotions,
    },

    state: {
    },

    actions: {
    },

    mutations: {
    },

    getters: {
    }
})

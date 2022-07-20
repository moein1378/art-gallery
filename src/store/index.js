import Vue from 'vue'
import Vuex from 'vuex'
import manageApi from '@/api/manage-posts'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        layout: 'simple-layout',
        rules: {
            required: value => !!value || 'Required.',
            counter: value => (value.length <= 20 && value.length != 0 && value != '') || 'Max 20 characters',
            url: value => {
                const pattern = /(https?:\/\/.*\.(?:png|gif|webp|jpeg|jpg|svg))/i
                return value == '' || pattern.test(value) || 'Invalid URL.'
            },
            username: value => {
                const pattern = /^([a-zA-Z0-9]|[-._]|[_.-](?![-._]|[_.-])){4,20}$/
                return value == '' || pattern.test(value) || 'Invalid Username.'
            },
            peopleName: value => {
                const pattern = /^[a-zA-Z ]+$/
                return pattern.test(value) || 'Invalid Name.'
            },
            emailRules: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
            min: value => value.length >= 8 || 'Min 8 characters'
        },
        phoneNumberRules: [
            value => (value || '').length <= 11 || 'Max 11 characters',
            value => {
                const pattern = /^(\+98|0098|98|0)?9\d{9}$/g;
                return value == '' || pattern.test(value) || 'Invalid Phone Number.'
            }

        ],
        totalPosts: [],
        simple_post: [],
        popular_articles: [],
        latest_post: [],
        totalProducts: [],
        freeProducts: [],
        nonFreeProducts: [],
        onLoading: true,
    },
    getters: {
        layout(state) {
            return state.layout
        }
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload
        },
        SAVE_TOTAL_POSTS(state, totalPosts) {
            state.totalPosts = [];
            Object.entries(totalPosts).map((item) => {
                state.totalPosts.push({
                    post_id: item[0],
                    ...item[1]
                })
            })
            state.onLoading = false;
        },
        SAVE_SIMPLE_POSTS(state) {
            state.simple_post = [];
            if (state.totalPosts.length > 0) {
                state.simple_post = state.totalPosts.filter(function(post) {
                    return !post.is_popular;
                })
                state.onLoading = false;
            }
        },
        SAVE_POPULAR_POSTS(state) {
            state.popular_articles = [];
            if (state.totalPosts.length > 0) {
                state.popular_articles = state.totalPosts.filter(function(post) {
                    return post.is_popular;
                })
                state.onLoading = false;
            }
        },
        SAVE_LATEST_POSTS(state) {
            state.latest_post = [];
            if (state.totalPosts.length >= 2) {
                state.latest_post.push(state.totalPosts[state.totalPosts.length - 1])
                state.latest_post.push(state.totalPosts[state.totalPosts.length - 2])
                state.onLoading = false;
            }
        },
        SAVE_TOTAL_PRODUCTS(state, totalProducts) {
            state.totalProducts = [];
            Object.entries(totalProducts).map((item) => {
                state.totalProducts.push({
                    product_id: item[0],
                    ...item[1]
                })
            })
            state.onLoading = false;
        },
        SAVE_FREE_PRODUCTS(state) {
            state.freeProducts = [];
            if (state.totalProducts.length > 0) {
                state.freeProducts = state.totalProducts.filter(function(product) {
                    return product.product_price == 0;
                })
                state.onLoading = false;
            }
        },
        SAVE_NON_FREE_PRODUCTS(state) {
            state.nonFreeProducts = [];
            if (state.totalProducts.length > 0) {
                state.nonFreeProducts = state.totalProducts.filter(function(product) {
                    return product.product_price != 0;
                })
                state.onLoading = false;
            }
        }
    },
    actions: {
        SET_LAYOUT(commit, payload) {
            commit('SET_LAYOUT', payload)
        },
        loadTotalPosts({ commit }) {
            manageApi.get('/posts.json')
                .then(({ data }) => {
                    commit('SAVE_TOTAL_POSTS', data);
                    commit('SAVE_SIMPLE_POSTS');
                    commit('SAVE_POPULAR_POSTS');
                    commit('SAVE_LATEST_POSTS');
                })
                .catch(error => { throw new Error(`API ${error}`); })
        },
        loadTotalProducts({ commit }) {
            manageApi.get('/products.json')
                .then(({ data }) => {
                    commit('SAVE_TOTAL_PRODUCTS', data);
                    commit('SAVE_FREE_PRODUCTS');
                    commit('SAVE_NON_FREE_PRODUCTS');
                })
                .catch(error => { throw new Error(`API ${error}`); })
        }

    },
    modules: {}
})
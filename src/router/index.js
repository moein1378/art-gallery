import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home-page',
        component: () =>
            import ('../views/home-page.vue')
    },
    {
        path: '/user/contact-us',
        name: 'contactUs',
        component: () =>
            import ('../views/contactUs-page.vue')
    },
    {
        path: '/user/shop-page',
        name: 'shop-page',
        component: () =>
            import ('../views/shop-page.vue')
    },
    {
        path: '/user/single-product/:product_id',
        name: 'single-product',
        component: () =>
            import ('../views/single-product.vue')
    },
    {
        path: '/user/blog-page',
        name: 'blog-page',
        component: () =>
            import ('../views/blog-page.vue')
    },
    {
        path: '/user/single-blog/:post_id',
        name: 'single-blog',
        component: () =>
            import ('../views/single-blog.vue')
    },
    {
        path: '/user/about-page',
        name: 'about-page',
        component: () =>
            import ('../views/about-page.vue')
    },
    {
        path: '/user/admin-login',
        name: 'admin-login',
        component: () =>
            import ('../views/admin-login.vue'),
    },
    {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        meta: {
            isAdmin: true
        },
        component: () =>
            import ('../views/admin/dashboard-page.vue'),
    },
    {
        path: '/admin/manage-posts',
        name: 'manage-posts',
        meta: {
            isAdmin: true
        },
        component: () =>
            import ('../views/admin/manage-posts.vue'),
    },
    {
        path: '/admin/manage-products',
        name: 'manage-products',
        meta: {
            isAdmin: true
        },
        component: () =>
            import ('../views/admin/manage-products.vue'),
    },
    {
        path: '*',
        name: 'notFound-page',
        component: () =>
            import ("../views/notFound-page.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { behavior: 'smooth', x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAdmin)) {
        if (localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == '') {
            next({
                name: 'admin-login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
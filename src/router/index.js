import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () =>
            import ('../views/AllProjects.vue')
    },
    {
        path: '/articles',
        name: 'articles',
        component: () =>
            import ('../views/Articles.vue')
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () =>
            import ('../views/Privacy.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

export default router
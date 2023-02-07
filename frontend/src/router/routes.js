const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        name: 'note',
        path: '/note',
        component: () => import('../views/Note.vue')
    },
    {
        name: 'todo',
        path: '/todo',
        component: () => import('../views/Todo.vue')
    },
    {
        name: 'starry_sky',
        path: '/starry_sky',
        component: () => import('../views/StarrySky.vue')
    },
    {
        name: 'setting',
        path: '/setting',
        component: () => import('../views/Setting.vue')
    },
    
]

export default routes

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
        name: 'platform',
        path: '/platform',
        component: () => import('../views/Platform.vue')
    },
    {
        name: 'setting',
        path: '/setting',
        component: () => import('../views/Setting.vue')
    },
    
]

export default routes

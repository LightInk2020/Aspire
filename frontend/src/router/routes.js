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
        name: 'starry_sky',
        path: '/starry_sky',
        component: () => import('../views/StarrySky.vue')
    },
    {
        name: 'share',
        path: '/share',
        component: () => import('../views/Share.vue')
    },
    {
        name: 'todo',
        path: '/todo',
        component: () => import('../views/Todo.vue')
    },    
]

export default routes

/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'about',
        },
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'test',
        },
    },
];



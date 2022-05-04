import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Wall',
        component: () => import('@/views/Wall.vue'),
      },
      {
        path: 'createPost',
        name: 'CreatePost',
        component: () => import('@/views/CreatePost.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});
export default router;

export default [
  { name: 'home/Home', path: '/', component: () => import('@/pages/home/Home.vue') },
  { name: 'home/Privacy', path: 'privacy', component: () => import('@/pages/home/Privacy.vue') },
  { name: 'Forbidden', path: 'forbidden', component: () => import('@/pages/Forbidden.vue') },
  { name: 'NotFound', path: '*', component: () => import('@/pages/NotFound.vue') },
];

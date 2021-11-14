export default [
  { name: 'Home', path: '/', component: () => import('@/pages/Home.vue') },
  { name: 'Privacy', path: 'privacy', component: () => import('@/pages/Privacy.vue') },
  { name: 'Forbidden', path: 'forbidden', component: () => import('@/pages/Forbidden.vue') },
  { name: 'NotFound', path: '*', component: () => import('@/pages/NotFound.vue') },
];

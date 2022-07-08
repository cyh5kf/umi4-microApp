export default {
  npmClient: 'yarn',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: '@/pages/home',
    },
  ],
};

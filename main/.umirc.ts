export default {
  npmClient: 'yarn',
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/',
      routes: [
        {
          path: 'child/home',
          name: '子应用',
          component: '@/pages/child',
        },
      ],
    }
  ]
};

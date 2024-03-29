import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
});

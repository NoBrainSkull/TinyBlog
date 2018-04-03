import Vue from 'vue';
import Router from 'vue-router';
import PostsList from '~/pages/PagePostsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PostsList,
    },
  ],
});

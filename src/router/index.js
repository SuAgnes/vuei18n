import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/components/i18n'
import VueI18n from 'vue-i18n';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'i18n',
      component: i18n,
    }
  ]
})

import Vue          from 'vue'
import Router       from 'vue-router'
import Meow   from '@/view/Meow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Meow',
      component: Meow
    }
  ]
})

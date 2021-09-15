import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/components/test'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'test',
  component: Test
}]

export default new Router({
  routes,
  mode: "history"
})

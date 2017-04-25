import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Buy from '@/components/pages/Buy'
import RecommendGroup from  '@/components/pages/RecommendGroup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/buy',
      component: Buy,
      children:[
        {
          path:'',
          name:'Buy.RecommendGroup',
          component: RecommendGroup,
        }
      ]
    }
  ]
})

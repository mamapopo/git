import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/page/index'
import myNew from '@/components/page/mynew'
import theme from '@/components/page/theme'
import goto from '@/components/page/goto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/new',
      name:'mynew',
       component: myNew
    },
    {
      path:'/theme',
      name:'theme',
      component:theme
    } ,
    {
      path:'/goto',
      name:'goto',
      component:goto
    }
  ]
})

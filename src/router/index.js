import Vue from 'vue'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
import grid from '@/components/grid-default'
import feiyi from '@/components/feiyi'

Vue.use(Router)
export default new Router({
routes:[
	{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/',
      name: 'HelloWorld',
	  meta: {title: '主页'},  
	  component: HelloWorld 
    },
	{
	  path: '/card',
	  name: 'card',
	  meta: {title: '网页'},
	  component: card 
	},
	{
	  path: '/grid',
	  name: 'grid',
	  meta: {title: '九宫格'},
	  component: grid 
	},
	{
	  path: '/feiyi',
	  name: 'feiyi',
	  meta: {title: '非遗商场'},
	  component: feiyi
	}
  ]
})

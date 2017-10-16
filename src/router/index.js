import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Recommend from '@/pages/recommend'
import Attractions from '@/pages/attractions'
import Guide from '@/pages/guide'
import Help from '@/pages/help'
import About from '@/pages/about'
import FormUser from '@/pages/form'
import GuoNei from '@/pages/guonei'
import JingWai from '@/pages/jingwai'
import GongLue from '@/pages/gonglue'
import ZhiNan from '@/pages/zhinan'
import ZiXun from '@/pages/zixun'
import TouSu from '@/pages/tousu'
import Article from '@/pages/article'
import Article2 from '@/pages/article2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      name:'Attractions',
      path: '/attractions',
      component: Attractions
    },
    {
      path: '/guide',
      component: Guide
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/form',
      component: FormUser
    },
    {
      path: '/guonei',
      component: GuoNei
    },
    {
      path: '/jingwai',
      component: JingWai
    },
    {
      path: '/gonglue',
      component: GongLue
    },
    {
      path: '/zhinan',
      component: ZhiNan
    },
    {
      path: '/zixun',
      component: ZiXun
    },
    {
      path: '/tousu',
      component: TouSu
    },
    {
      name:'Article',
      path: '/article',
      component: Article
    },
    ,
    {
      name:'Article2',
      path: '/article2',
      component: Article2
    }
  ]
})

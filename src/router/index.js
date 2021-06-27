import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ques from '../components/questionnaire/'
import set from '../components/questionnaire/set.vue'
import content from '../components/questionnaire/content.vue'
import result from '../components/questionnaire/result.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ques/:setList',
      name: 'ques',
      component:ques,
      props:true,
      children:[
        {
          path:'content/:setList',
          name:'content',
          component:content,
          props:true
        }
      ]
    },
    {
      path:'/set',
      name:'set',
      component:set
    },
    {
      path:'/result/:comSetList',
      name:'result',
      component:result,
      props:true
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(Router)

// 映射关系
const routes = [
  {
    // 默认重定向到主页
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home,
    // 路由嵌套
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        name: 'HomeNews',
        component: HomeNews
      },
      {
        path: 'message',
        name: 'HomeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    // 动态路由
    path: '/user/:userId',
    name: 'User',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new Router({
  routes,
  // 默认为hash模式
  mode: 'history'
  // 修改router-link选中时的类名
  // linkActiveClass: 'active'
})

/**
 * 全局导航守卫
 */
// 前置钩子
router.beforeEach((to, from, next) => {
  console.log('before.')
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子
router.afterEach((to, from) => {
  console.log('after.')
})

export default router

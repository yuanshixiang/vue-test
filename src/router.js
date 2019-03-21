import Vue from 'vue'
import VueRouter from 'vue-router'
//导入taber组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopCarContainer from './components/tabber/ShopCarContainer.vue'
import NewsList from './components/new/NewsList.vue'
import Newsinfo from './components/new/Newsinfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopCarContainer},
    {path:'/home/newlist',component:NewsList},
    {path:'/home/newsinfo/:id',component:Newsinfo}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router

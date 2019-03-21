// 入口文件
import Vue from 'vue'
//导入App.js组件
import App  from './App.vue'
//按需导入mint-ui组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//接收router.js路由组件
import router from './router'
//导入mui
import './lib/mui/css/mui.min.css'
//导入mui字体扩展css
import './lib/mui/css/icons-extra.css'
//导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//导入时间插件
import moment from 'moment'
//定义一个全局过滤器
Vue.filter('dateFrmat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})




//创建一Vue实列
var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    router,
    render(c){
        return c(App)
    }
})
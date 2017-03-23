// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueResource from 'vue-resource';
import Mall from './components/mall.vue';
import Home from './view/home.vue';
import My from './components/my.vue';
import Download from './components/download.vue';
import Banner from './components/banner/banner.vue';
import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/download',
      component: Download
    },
    {
      path: '/mall',
      component: Mall
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


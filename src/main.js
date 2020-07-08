// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 这个是用于统一不同机型所显示的差异问题
import 'styles/reset.css'
// 这个是用于多像素问题
import 'styles/border.css'
// 这个是用于一些移动端手机的小问题存在300毫秒延迟点击问题
// cd Travel目录，npm install fastClick --save
// 后面这个save可以在pakeage.json的dependencies中添加新配置
import fastClick from 'fastClick'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

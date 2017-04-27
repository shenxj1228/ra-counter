// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import header from './components/app-header'
import content from './components/app-content'
import footer from './components/app-footer'
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.component('app-header', header);
Vue.component('app-content', content);
Vue.component('app-footer', footer);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})

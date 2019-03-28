// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import THREE from 'three'
Vue.config.productionTip = false
const scene=new THREE.Scene();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  THREE,
  scene,
  components: { App },
  template: '<App/>'
})

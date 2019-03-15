import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import store from './store'
window.THREE = require('../node_modules/three/build/three');
window.somaria = require('../node_modules/somaria/build/Visualization');

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

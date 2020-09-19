import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from './plugins/vue-router';

Vue.config.productionTip = false

new Vue({
  vuetify,
  vueRouter,
  render: h => h(App)
}).$mount('#app')

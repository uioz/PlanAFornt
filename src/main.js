import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import "./plugins/museui.js";
import "./plugins/museloading.js";
import "./plugins/museprogress.js";
import "./plugins/fontawseome.js";
import "./main.css";

Vue.config.productionTip = false;

if (process.env.VUE_APP_MOCK === 'true'){
  require('./plugins/mock.js');
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

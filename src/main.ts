import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


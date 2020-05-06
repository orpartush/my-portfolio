import Vue from 'vue';
import App from './App.vue';
import './styles/global.scss';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import * as TastyBurgerButton from 'vue-tasty-burgers';

Vue.use(TastyBurgerButton);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

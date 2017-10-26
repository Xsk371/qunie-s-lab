import Vue from 'vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import {App} from './components/app';
import './sass/main.scss';

Vue.use(ElementUI);
new Vue({
  el: '#app-main',
  router,
  store,
  components: {
    App
  }
});

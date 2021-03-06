import Vue from 'vue';
import VueRouter from 'vue-router';

import {HomeComponent} from '../components/home';
import {AboutComponent} from '../components/about';
import {ListComponent} from '../components/list';

// register the plugin
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/list', component: ListComponent},
  ]
});

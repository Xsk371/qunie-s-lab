import Vue from 'vue';
import Component from 'vue-class-component';
// import {State} from 'vuex-class';

import './home.scss';


@Component({
  template: require('./home.html')
})
export class HomeComponent extends Vue {

  package: string = 'vue-typescript-lab';
  repo: string = 'https://github.com/Xsk371/qunie-s-lab';
  mode: string = process.env.ENV;

  // @State test;

  created() {
    // console.log(this.test);
  }

}

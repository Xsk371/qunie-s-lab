import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../util/log';
import {NavbarComponent} from '../navbar';
import './app.scss';

@Component({
  template: require('./app.html'),
  components: {
    'NavBar': NavbarComponent
  }
})

export class App extends Vue {

  protected logger: Logger;

  navExpand: boolean = false;

  menuEvent(toExpand) {
    this.navExpand = toExpand;
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info('app is ready!'));
  }


}

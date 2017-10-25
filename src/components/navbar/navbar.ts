import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import {Link} from './link';
import {Logger} from '../../util/log';
import './nav.scss';

@Component({
  template: require('./nav.html')
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  showText: boolean = false; // default value

  object: { default: string } = {default: 'Default object property!'}; // objects as default values don't need to be wrapped into functions
  private ListLinks: Link[] = [new Link('Etc', '/list', 'fa fa-diamond', false, [])];
  links: Link[] = [
    new Link('Home', '/', 'fa fa-home', false, []),
    new Link('About', '/about', 'fa fa-flag', false, []),
    new Link('List', '', 'fa fa-list', true, this.ListLinks)
  ];


  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}

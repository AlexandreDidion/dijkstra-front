import Component from '@glimmer/component';

export default class PathComponent extends Component {
  get endPath() {
    return this.args.cities.lastObject;
  }
}

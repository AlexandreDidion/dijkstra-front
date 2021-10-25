import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CountryController extends Controller {
  @tracked dijkstra = this.dijkstra;
}

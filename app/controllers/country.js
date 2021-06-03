import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CountriesController extends Controller {
  @service router;

  @tracked city_start = this.cities.firstObject;
  @tracked city_end = this.cities.lastObject;

  get cities() {
    return this.country.cities;
  }

  get urlDijkstra() {
    return this.router.urlFor('dijkstra');
  }
}

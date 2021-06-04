import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class CountriesController extends Controller {
  @tracked city_start = this.cities.firstObject;
  @tracked city_end = this.cities.lastObject;

  get cities() {
    return this.country.cities;
  }

  @action
  goToDijkstra() {
    this.transitionToRoute('dijkstra', {
      queryParams: {
        city_start_id: this.city_start.id,
        city_end_id: this.city_end.id,
      },
    });
  }
}

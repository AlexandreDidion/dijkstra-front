import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class CountriesController extends Controller {
  @tracked cityStart = this.cities.firstObject;
  @tracked cityEnd = this.cities.lastObject;

  get cities() {
    return this.country.cities;
  }

  @action
  goToDijkstra() {
    this.transitionToRoute('dijkstra', {
      queryParams: {
        cityStartId: this.cityStart.id,
        cityEndId: this.cityEnd.id,
      },
    });
  }
}

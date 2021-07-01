import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CountryController extends Controller {
  @tracked cityStart;
  @tracked cityEnd;
  @tracked step = 'country';
  @tracked dijkstra = null;

  get cities() {
    return this.country.cities;
  }

  @action
  onSearch() {
    this.step = 'dijkstra';
    this.dijkstra = this.store.createRecord('dijkstra', { 
        cityStartId: this.cityStart.id,
        cityEndId: this.cityEnd.id,
      })
      .save();
  }
}

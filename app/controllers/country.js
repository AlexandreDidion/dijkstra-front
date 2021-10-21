import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CountryController extends Controller {
  @service router;

  @tracked cityStart;
  @tracked cityEnd;
  @tracked step = 'country';
  @tracked dijkstra = null;

  get cities() {
    return this.country.cities;
  }

  get remainingCities() {
    return this.country.cities.filter((city) => !(city == this.cityStart));
  }

  @action
  async onSearch() {
    this.step = 'dijkstra';
    this.dijkstra = await this.store
      .createRecord('dijkstra', {
        cityStartId: this.cityStart.id,
        cityEndId: this.cityEnd.id,
      })
      .save();
    this.router.transitionTo('country.dijkstra', this.dijkstra.id);
  }
}

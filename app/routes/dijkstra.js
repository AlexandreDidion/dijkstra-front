import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class CountriesRoute extends Route {
  @service store;

  model(params) {
  }
}
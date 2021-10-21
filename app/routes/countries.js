import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CountriesRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('country');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.countries = model;
  }
}

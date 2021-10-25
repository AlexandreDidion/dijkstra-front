import Route from '@ember/routing/route';

export default class CountryRoute extends Route {
  setupController(controller, model) {
    super.setupController(controller, model);

    controller.country = model;
    controller.set('cityStart', controller.country.cities.firstObject);
    controller.set('cityEnd', controller.country.cities.lastObject);
  }

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('step', 'country');
      controller.set('dijkstra', null);
    }
  }
}

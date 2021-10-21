import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DijkstraRoute extends Route {
  @service store;

  model(params) {
    return this.store.peekRecord('dijkstra', params.dijkstra_id);
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.dijkstra = model;
  }

  resetController(controller, isExiting, transition) {
    if (isExiting && transition.targetName !== 'error') {
      controller.set('step', 'country');
    }
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DijkstraRoute extends Route {
  @service store;

  queryParams = {
    cityStartId: {
      refreshModel: true,
    },
    cityEndId: {
      refreshModel: true,
    },
  };

  model(params) {
    return params;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.dijkstra = this.store.createRecord('dijkstra', { 
      cityStartId: model.cityStartId,
      cityEndId: model.cityEndId
    }).save();
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('cityStartId', null);
      controller.set('cityEndId', null);
    }
  }
}
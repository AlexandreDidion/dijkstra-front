import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DijkstraPathRoute extends Route {
  @service store;

  queryParams = {
    city_start_id: {
      refreshModel: true,
    },
    city_end_id: {
      refreshModel: true,
    },
  };

  model(params) {
    this.store.createRecord('dijkstra', {
      city_start_id: params.city_start_id,
      city_end_id: params.city_end_id,
    })
      .save();
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('city_start_id', null);
      controller.set('city_end_id', null);
    }
  }
}
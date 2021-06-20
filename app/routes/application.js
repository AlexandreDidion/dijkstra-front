import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @action
  loading(transition, route) {
    let controller = this.controllerFor(route);
    controller.set('currentlyLoading', true);

    transition.finally(() => {
      controller.set('currentlyLoading', false);
    });
  }
}
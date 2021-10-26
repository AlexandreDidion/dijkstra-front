import EmberRouter from '@ember/routing/router';
import config from 'dijkstra-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('countries');
  this.route('country', { path: '/countries/:country_id' }, function () {
    this.route('dijkstra', { path: '/dijkstra/:dijkstra_id' });
  });
});

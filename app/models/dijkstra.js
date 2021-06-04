import Model, { attr } from '@ember-data/model';

export default class DijkstraPathModel extends Model {
  @attr('string') journey;
  @attr('number') distance_km;
}

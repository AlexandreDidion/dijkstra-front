import Model, { attr } from '@ember-data/model';

export default class DijkstraModel extends Model {
  @attr('string') journey;
  @attr('number') distanceKm;
  @attr('number') cityStartId;
  @attr('number') cityEndId;
}

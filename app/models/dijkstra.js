import Model, { attr } from '@ember-data/model';

export default class DijkstraModel extends Model {
  @attr journey;
  @attr('number') distance;
  @attr('number') cityStartId;
  @attr('number') cityEndId;
}

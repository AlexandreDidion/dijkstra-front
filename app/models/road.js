import Model, { belongsTo } from '@ember-data/model';

export default class RoadModel extends Model {
  @belongsTo('country') country;
}

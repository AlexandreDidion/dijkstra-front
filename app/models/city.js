import Model, {attr, belongsTo} from '@ember-data/model';

export default class CityModel extends Model {
  @attr('string') name;

  @belongsTo('country') country;
}

import Model, { attr, hasMany } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr('string') name;
  @attr() latitude;
  @attr() longitude;

  @hasMany('city') cities;
  @hasMany('road') roads;
}

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CountriesController extends Controller {
  @service router;

  @tracked country = this.countries.firstObject;

  get urlCountry() {
    return this.router.urlFor('country', this.country.id);
  }
}

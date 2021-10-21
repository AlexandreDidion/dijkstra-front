import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CountriesController extends Controller {
  @service router;
  @tracked country = this.countries.firstObject;

  @action
  goToCountry() {
    this.router.transitionTo('country', this.country);
  }
}

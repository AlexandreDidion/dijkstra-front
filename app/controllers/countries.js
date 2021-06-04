import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class CountriesController extends Controller {
  @tracked country = this.countries.firstObject;

  @action
  goToCountry() {
    this.transitionToRoute('country', this.country);
  }
}

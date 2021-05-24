import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CountriesRoute extends Route {
  @service store;

  @tracked selectedValue = 0;

  model() {
    return this.store.findAll('country');
  }

  @action
  selectValue(event) {
    let value_id = event.target.value;
    this.selectedValue = value_id;
    console.log(this.selectedValue);
  }

  
}

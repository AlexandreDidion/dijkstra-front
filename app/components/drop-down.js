import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DropDownComponent extends Component {
  @tracked selectedValues;

  @action
  selectValue(event) {
    let country_id = event.target.value
    this.selectedValue = country_id
  }
}
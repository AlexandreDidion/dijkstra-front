import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class DropDownComponent extends Component {

  @tracked selectedValue;

  @action
  selectValue(event) {
    let value_id = event.target.value
    this.selectedValue = value_id
  }
}

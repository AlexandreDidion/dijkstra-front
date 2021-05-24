import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class DropDownComponent extends Component {
  @service router;

  @tracked selectedValue = 0;

  get urlPath() {
    return this.router.urlFor(this.args.pathTo,this.selectedValue);
  }

  @action
  selectValue(event) {
    let value_id = event.target.value
    this.selectedValue = value_id
  }
}

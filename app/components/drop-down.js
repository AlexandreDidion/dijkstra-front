import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { inject as service } from '@ember/service';
export default class DropDownComponent extends Component {
  @service router

  selectId = `select-${guidFor(this)}`;
}

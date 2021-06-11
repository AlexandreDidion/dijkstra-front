import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DijkstraController extends Controller {
  queryParams = ['cityStartId', 'cityEndId'];

  @tracked cityStartId = null;
  @tracked cityEndId = null;
}

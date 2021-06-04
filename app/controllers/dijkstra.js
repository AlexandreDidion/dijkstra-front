import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DijkstraPathController extends Controller {
  queryParams = ['city_start_id', 'city_end_id'];

  @tracked city_start_id = null;
  @tracked city_end_id = null;

}
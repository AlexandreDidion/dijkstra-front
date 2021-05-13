import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://dijkstralex.herokuapp.com/'
  namespace = 'api/v1';
  headers = {
    'Authorization': ENV[BASIC_SECRET]
  };
}
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | countries', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:countries');
    assert.ok(controller);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | test-videochat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:test-videochat');
    assert.ok(route);
  });
});

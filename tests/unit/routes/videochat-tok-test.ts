import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | videochat-tok', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:videochat-tok');
    assert.ok(route);
  });
});

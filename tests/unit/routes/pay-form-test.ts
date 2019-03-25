import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pay-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pay-form');
    assert.ok(route);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | open-chat-with', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:open-chat-with');
    assert.ok(route);
  });
});

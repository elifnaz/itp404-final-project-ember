QUnit.module('JSHint | components/restaurant-item.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/restaurant-item.js should pass jshint.\ncomponents/restaurant-item.js: line 2, col 44, Missing semicolon.\n\n1 error');
});

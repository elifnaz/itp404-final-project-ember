QUnit.module('JSHint | controllers/search.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/search.js should pass jshint.\ncontrollers/search.js: line 12, col 53, Expected \'===\' and instead saw \'==\'.\ncontrollers/search.js: line 15, col 49, Expected \'===\' and instead saw \'==\'.\ncontrollers/search.js: line 24, col 53, Expected \'===\' and instead saw \'==\'.\n\n3 errors');
});

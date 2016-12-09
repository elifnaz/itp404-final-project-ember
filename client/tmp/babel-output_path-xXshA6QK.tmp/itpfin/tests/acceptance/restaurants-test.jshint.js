define('itpfin/tests/acceptance/restaurants-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/restaurants-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/restaurants-test.js should pass jshint.');
  });
});
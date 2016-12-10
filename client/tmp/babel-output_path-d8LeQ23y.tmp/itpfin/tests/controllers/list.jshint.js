define('itpfin/tests/controllers/list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/list.js should pass jshint.');
  });
});
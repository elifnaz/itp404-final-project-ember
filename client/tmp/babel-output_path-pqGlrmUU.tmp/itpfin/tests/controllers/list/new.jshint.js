define('itpfin/tests/controllers/list/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/list/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/list/new.js should pass jshint.\ncontrollers/list/new.js: line 7, col 9, \'city\' is defined but never used.\ncontrollers/list/new.js: line 10, col 15, \'body\' is not defined.\ncontrollers/list/new.js: line 12, col 16, \'ENV\' is not defined.\n\n3 errors');
  });
});
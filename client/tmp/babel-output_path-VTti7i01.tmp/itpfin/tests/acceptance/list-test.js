define('itpfin/tests/acceptance/list-test', ['exports', 'qunit', 'itpfin/tests/helpers/module-for-acceptance'], function (exports, _qunit, _itpfinTestsHelpersModuleForAcceptance) {

  (0, _itpfinTestsHelpersModuleForAcceptance['default'])('Acceptance | list', {
    beforeEach: function beforeEach() {
      window.server.createList('restaurant', 20);
    },
    afterEach: function afterEach() {
      window.server.shutdown();
    }
  });

  (0, _qunit.test)('visiting /list redirects to the list route', function (assert) {
    visit('/list');
    andThen(function () {
      assert.equal(currentURL(), '/list');
    });
  });

  (0, _qunit.test)('visiting / redirects to the search route', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/search');
    });
  });

  (0, _qunit.test)('user gets 0 results without search parameters', function (assert) {
    visit('/search');
    click('button');
    andThen(function () {
      assert.equal(find('.listing').length, 0);
    });
  });
});
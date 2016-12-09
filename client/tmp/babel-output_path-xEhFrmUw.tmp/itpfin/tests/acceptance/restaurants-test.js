define('itpfin/tests/acceptance/restaurants-test', ['exports', 'qunit', 'itpfin/tests/helpers/module-for-acceptance'], function (exports, _qunit, _itpfinTestsHelpersModuleForAcceptance) {

  (0, _itpfinTestsHelpersModuleForAcceptance['default'])('Acceptance | restaurants');

  (0, _qunit.test)('visiting /restaurants', function (assert) {
    visit('/restaurants');

    andThen(function () {
      assert.equal(currentURL(), '/restaurants');
    });
  });
});
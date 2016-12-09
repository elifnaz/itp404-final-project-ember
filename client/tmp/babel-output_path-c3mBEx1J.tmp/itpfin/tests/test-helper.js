define('itpfin/tests/test-helper', ['exports', 'itpfin/tests/helpers/resolver', 'ember-qunit'], function (exports, _itpfinTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itpfinTestsHelpersResolver['default']);
});
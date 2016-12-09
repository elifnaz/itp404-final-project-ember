import { test } from 'qunit';
import moduleForAcceptance from 'itpfin/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | restaurants');

test('visiting /restaurants', function(assert) {
  visit('/restaurants');

  andThen(function() {
    assert.equal(currentURL(), '/restaurants');
  });
});

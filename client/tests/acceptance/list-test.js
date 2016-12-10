import { test } from 'qunit';
import moduleForAcceptance from 'itpfin/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list', {
  beforeEach() {
    window.server.createList('restaurant', 20);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('visiting /list redirects to the list route', function(assert) {
  visit('/list');
  andThen(function() {
    assert.equal(currentURL(), '/list');
  });
});

test('visiting / redirects to the search route', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/search');
  });
});

test('user gets 0 results without search parameters', function(assert) {
  visit('/search');
  click('button');
  andThen(function() {
    assert.equal(find('.listing').length, 0);
  });
});

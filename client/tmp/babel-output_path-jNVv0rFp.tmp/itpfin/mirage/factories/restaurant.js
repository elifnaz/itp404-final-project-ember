define('itpfin/mirage/factories/restaurant', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    name: _emberCliMirage.faker.name.firstName,
    city: _emberCliMirage.faker.address.city
  });
});
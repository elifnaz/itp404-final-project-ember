define('itpfin/routes/list', ['exports', 'ember', 'itpfin/config/environment'], function (exports, _ember, _itpfinConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      var endPT = _itpfinConfigEnvironment['default'].APP.apiEndpoint;
      return _ember['default'].$.getJSON(endPT + '/api/mylist');
    }
  });
});
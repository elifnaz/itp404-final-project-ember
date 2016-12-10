define('itpfin/routes/search/results', ['exports', 'ember', 'itpfin/config/environment'], function (exports, _ember, _itpfinConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var term = params.term;
      var loc = params.location;
      var endPT = _itpfinConfigEnvironment['default'].APP.apiEndpoint;
      var url = endPT + '/api/search/' + term + '/' + loc;
      var promise = _ember['default'].$.ajax({
        type: 'get',
        url: url
      });
      return promise;
    }
  });
});
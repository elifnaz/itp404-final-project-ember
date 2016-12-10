define('itpfin/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var term = params.term;
      var loc = params.location;
      var url = 'http://localhost:3000/api/search/' + term + '/' + loc;
      var promise = _ember['default'].$.ajax({
        type: 'get',
        url: url
      });
      return promise;
    }
  });
});
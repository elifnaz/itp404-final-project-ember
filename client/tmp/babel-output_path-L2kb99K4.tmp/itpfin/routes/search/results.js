define('itpfin/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var term = params.term;
      var loc = params.location;
      if (term == null) {
        term = 'pizza';
      }
      if (loc == null) {
        loc = 'random';
      }
      var url = 'http://localhost:3000/search/' + term + '/' + loc;
      var promise = _ember['default'].$.ajax({
        type: 'get',
        url: url
      });
      return promise;
    }
  });
});
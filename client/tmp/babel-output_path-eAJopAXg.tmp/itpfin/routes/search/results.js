define('itpfin/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      var url = 'http://localhost:3000/search/' + params.term;
      var promise = _ember['default'].$.ajax({
        type: 'get',
        url: url
      });

      return promise;
    }
  });
});
define('itpfin/routes/list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return _ember['default'].$.getJSON('http://localhost:3000/api/mylist');
    }
  });
});
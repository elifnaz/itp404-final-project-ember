define('itpfin/controllers/list', ['exports', 'ember', 'itpfin/config/environment'], function (exports, _ember, _itpfinConfigEnvironment) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addRestaurant: function addRestaurant(e) {
        e.preventDefault();
        console.log('added restaurant');
        var name = this.get('name');
        var city = this.get('city');
        if (name == null || city == null) {
          alert("You must fill out all values!");
        } else {
          var endPT = _itpfinConfigEnvironment['default'].APP.apiEndpoint;
          _ember['default'].$.ajax({
            type: 'post',
            url: endPT + '/api/mylist',
            data: {
              name: name,
              city: city
            }
          });
        }
        // this.transitionToRoute('search.results', searchTerm);
      }
    }
  });
});
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
          var controller = this;
          var endPT = _itpfinConfigEnvironment['default'].APP.apiEndpoint;
          _ember['default'].$.ajax({
            type: 'post',
            url: endPT + '/api/mylist',
            data: {
              name: name,
              city: city
            }
          }).then(function (response) {
            controller.set('name', null);
            controller.set('city', null);
            var restaurants = controller.get('model.restaurants');
            // restaurants.push(response);
            var newRestaurants = restaurants.concat(response);
            controller.set('model.restaurants', newRestaurants);
          });
        }
      }
    }
  });
});
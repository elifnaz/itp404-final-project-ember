import Ember from 'ember';
import ENV from 'itpfin/config/environment';

export default Ember.Controller.extend({
  actions: {
    addRestaurant: function(e) {
      e.preventDefault();
      console.log('added restaurant');
      var name = this.get('name');
      var city = this.get('city');
      if (name == null || city == null) {
        alert("You must fill out all values!");
      }
      else {
        var controller = this;
        var endPT =  ENV.APP.apiEndpoint;
        Ember.$.ajax({
					type:'post',
					url: endPT + '/api/mylist',
					data: {
						name: name,
            city: city
					}
				}).then(function(response) {
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

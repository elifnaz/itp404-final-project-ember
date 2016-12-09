import Ember from 'ember';

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
        Ember.$.ajax({
					type:'post',
					url: 'http://localhost:3000/api/mylist',
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

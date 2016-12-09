import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['restaurant'],
  isPopular: Ember.computed('restaurant.review_count', function() {
    return (this.get('restaurant.review_count') > 300);
  }),

  actions: {

    addToList: function(e) {
      e.preventDefault();
      var name = this.get('restaurant.name');
      var city = this.get('restaurant.location.city');
      console.log(name);
      console.log(city);
        Ember.$.ajax({
					type:'post',
					url: 'http://localhost:3000/api/mylist',
					data: {
						name: name,
            city: city
					}
				});

        alert(name + ' added to Must Eats!');
      }
    }
});

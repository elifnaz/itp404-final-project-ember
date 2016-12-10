import Ember from 'ember';
import ENV from 'itpfin/config/environment';

export default Ember.Component.extend({
  classNames: ['restaurant'],
  isPopular: Ember.computed('restaurant.review_count', function() {
    return (this.get('restaurant.review_count') > 300);
  }),
  hasComments: Ember.computed('restaurant.snippet_text', function() {
    return (this.get('restaurant.snippet_text') != null);
  }),

  actions: {

    addToList: function(e) {
      e.preventDefault();
      var name = this.get('restaurant.name');
      var city = this.get('restaurant.location.city');
      console.log(name);
      console.log(city);
      var endPT =  ENV.APP.apiEndpoint;
        Ember.$.ajax({
					type:'post',
					url: endPT + '/api/mylist',
					data: {
						name: name,
            city: city
					}
				});

        alert(name + ' added to Must Eats!');
      }
    }
});

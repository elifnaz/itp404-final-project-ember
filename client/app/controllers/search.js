import Ember from 'ember';

export default Ember.Controller.extend({

  typedStrings: ["What are you craving?"],
  actions: {
    search: function(e) {
      e.preventDefault();
      console.log('form submitted');
      var searchTerm = this.get('searchTerm');
      var location = this.get('location');
      this.transitionToRoute('search.results', searchTerm, location);
    },
    searchRandom: function(e) {
      e.preventDefault();
      console.log('random form submitted');
      var searchTerm = this.get('searchTerm');
      this.transitionToRoute('search.results', searchTerm, 'random');
    }
  }
});

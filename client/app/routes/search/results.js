import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var url = 'http://localhost:3000/search/' + params.term;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    });

    return promise;
  }
});

import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var term = params.term;
    var loc = params.location;
    var url = 'http://localhost:3000/search/' + term + '/' + loc;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    });
    return promise;
  }
});

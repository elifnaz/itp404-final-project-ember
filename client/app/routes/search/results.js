import Ember from 'ember';
import ENV from 'itpfin/config/environment';

export default Ember.Route.extend({

  model: function(params) {
    var term = params.term;
    var loc = params.location;
    // if (term == null) {
    //   searchTerm = 'pizza';
    // }
    // if (loc == null) {
    //   location = 'random';
    // }
    var endPT =  ENV.APP.apiEndpoint;
    var url = endPT + '/api/search/' + term + '/' + loc;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    });
    return promise;
  }
});

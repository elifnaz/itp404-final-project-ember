import Ember from 'ember';
import ENV from 'itpfin/config/environment';

export default Ember.Route.extend({

  model: function(params) {
    var term = params.term;
    var loc = params.location;
    var endPT =  ENV.APP.apiEndpoint;
    var url = endPT + '/' + term + '/' + loc;
    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    });
    return promise;
  }
});

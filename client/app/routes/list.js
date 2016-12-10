import Ember from 'ember';
import ENV from 'itpfin/config/environment';

export default Ember.Route.extend({

  model: function() {
    var endPT =  ENV.APP.apiEndpoint;
    return Ember.$.getJSON(endPT + '/api/mylist');
  }
});

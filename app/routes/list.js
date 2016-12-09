import Ember from 'ember';
var $ = Ember.$;
export default Ember.Route.extend({

  model: function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/mylist'
    }).then(function(response) {
      console.log(response);
      return response;
    });
  }
});

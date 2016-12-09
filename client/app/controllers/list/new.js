import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  addRestaurant: function() {
    var name = Ember.$("#name").val();
    var city = Ember.$("#city").val();
    var obj = {
      "name": name,
      "city": body,
    };
    var base = ENV.APP.apiEndpoint;
    var url = base + 'api/list';
    Ember.$.post(url, obj);
    Ember.$("#name").val("");
    Ember.$("#city").val("");
    var mod = this.get("model");
    mod.pushObject(obj);
  }
}
});

define("itpfin/controllers/list/new", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    actions: {
      addRestaurant: function addRestaurant() {
        var name = _ember["default"].$("#name").val();
        var city = _ember["default"].$("#city").val();
        var obj = {
          "name": name,
          "city": body
        };
        var base = ENV.APP.apiEndpoint;
        var url = base + 'api/list';
        _ember["default"].$.post(url, obj);
        _ember["default"].$("#name").val("");
        _ember["default"].$("#city").val("");
        var mod = this.get("model");
        mod.pushObject(obj);
      }
    }
  });
});
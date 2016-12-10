define('itpfin/components/restaurant-item', ['exports', 'ember', 'itpfin/config/environment'], function (exports, _ember, _itpfinConfigEnvironment) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['restaurant'],
    isPopular: _ember['default'].computed('restaurant.review_count', function () {
      return this.get('restaurant.review_count') > 300;
    }),
    hasComments: _ember['default'].computed('restaurant.snippet_text', function () {
      return this.get('restaurant.snippet_text') != null;
    }),

    actions: {

      addToList: function addToList(e) {
        e.preventDefault();
        var name = this.get('restaurant.name');
        var city = this.get('restaurant.location.city');
        console.log(name);
        console.log(city);
        var endPT = _itpfinConfigEnvironment['default'].APP.apiEndpoint;
        _ember['default'].$.ajax({
          type: 'post',
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
});
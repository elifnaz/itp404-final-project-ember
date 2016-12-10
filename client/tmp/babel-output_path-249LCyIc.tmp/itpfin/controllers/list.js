define('itpfin/controllers/list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addRestaurant: function addRestaurant(e) {
        e.preventDefault();
        console.log('added restaurant');
        var name = this.get('name');
        var city = this.get('city');
        if (name == null || city == null) {
          alert("You must fill out all values!");
        } else {
          _ember['default'].$.ajax({
            type: 'post',
            url: 'http://localhost:3000/api/mylist',
            data: {
              name: name,
              city: city
            }
          });
        }
        // this.transitionToRoute('search.results', searchTerm);
      }
    }
  });
});
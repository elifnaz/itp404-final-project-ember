define('itpfin/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    typedStrings: ["What are you craving?"],
    actions: {
      search: function search(e) {
        e.preventDefault();
        console.log('form submitted');
        var searchTerm = this.get('searchTerm');
        var location = this.get('location');
        if (searchTerm == null) {
          searchTerm = 'pizza';
        }
        if (location == null) {
          location = 'random';
        }
        this.transitionToRoute('search.results', searchTerm, location);
      },
      searchRandom: function searchRandom(e) {
        e.preventDefault();
        console.log('random form submitted');
        var searchTerm = this.get('searchTerm');
        if (searchTerm == null) {
          console.log(null);
          searchTerm = 'pizza';
        }
        this.transitionToRoute('search.results', searchTerm, 'random');
      }
    }
  });
});
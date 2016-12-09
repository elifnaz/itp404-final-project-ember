define('itpfin/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    typedStrings: ["What are you craving?"],
    actions: {
      search: function search(e) {
        e.preventDefault();
        console.log('form submitted');
        var searchTerm = this.get('searchTerm');
        var location = this.get('location');
        this.transitionToRoute('search.results', searchTerm, location);
      },
      searchRandom: function searchRandom(e) {
        e.preventDefault();
        console.log('random form submitted');
        var searchTerm = this.get('searchTerm');
        this.transitionToRoute('search.results', searchTerm, 'random');
      }
    }
  });
});
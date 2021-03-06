define('itpfin/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    this.urlPrefix = 'http://localhost:3000'; // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = 'api'; // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    this.get('/mylist', function (schema) {
      return {
        restaurants: schema.db.restaurants
      };
    });

    this.get('/search/:id/:loc', function (schema) {
      return {
        restaurants: schema.db.businesses
      };
    });

    // this.post('/mylist/:id', function(schema){
    //   return {
    //     restaurants: schema.db.restaurants
    //   };
    // });
    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */
  };
});
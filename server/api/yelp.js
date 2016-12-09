var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: '9p0SdHdtyY5v3q_3TiaHPg',
  consumer_secret: 'XR7qhfs-YHzvO0sYOLYPRWNRiO0',
  token: 'z4UjYgRnXBuRLW2LcS7k_BzPOGEgO-TS',
  token_secret: 's3GN55jW72SoGjqpj5Rk_OeVqpo',
});

module.exports = {
  search: function(searchOptions) {
  var promise = yelp.search(searchOptions);
  return promise;
  }
};

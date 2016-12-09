define('itpfin/router', ['exports', 'ember', 'itpfin/config/environment'], function (exports, _ember, _itpfinConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itpfinConfigEnvironment['default'].locationType,
    rootURL: _itpfinConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('search', function () {
      this.route('results', { path: ':term' });
    });
    this.route('list', function () {});
  });

  exports['default'] = Router;
});
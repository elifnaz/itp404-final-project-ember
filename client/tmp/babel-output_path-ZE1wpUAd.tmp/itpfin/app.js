define('itpfin/app', ['exports', 'ember', 'itpfin/resolver', 'ember-load-initializers', 'itpfin/config/environment'], function (exports, _ember, _itpfinResolver, _emberLoadInitializers, _itpfinConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _itpfinConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itpfinConfigEnvironment['default'].podModulePrefix,
    Resolver: _itpfinResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _itpfinConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('itpfin/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itpfin/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itpfinConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itpfinConfigEnvironment['default'].APP.name, _itpfinConfigEnvironment['default'].APP.version)
  };
});
define('itpfin/tests/helpers/resolver', ['exports', 'itpfin/resolver', 'itpfin/config/environment'], function (exports, _itpfinResolver, _itpfinConfigEnvironment) {

  var resolver = _itpfinResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itpfinConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itpfinConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
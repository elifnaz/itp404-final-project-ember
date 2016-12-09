define('itpfin/tests/helpers/start-app', ['exports', 'ember', 'itpfin/app', 'itpfin/config/environment'], function (exports, _ember, _itpfinApp, _itpfinConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itpfinConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itpfinApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
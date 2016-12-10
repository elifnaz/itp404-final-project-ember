define('itpfin/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'itpfin/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _itpfinConfigEnvironment) {

  var name = _itpfinConfigEnvironment['default'].APP.name;
  var version = _itpfinConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
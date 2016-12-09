/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-typed',

  included: (app) => {
    app.import({
      development: app.bowerDirectory + '/typed.js/js/typed.js',
      production: app.bowerDirectory + '/typed.js/dist/typed.min.js'
    });
  }
};

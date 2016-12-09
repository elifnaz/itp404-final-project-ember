import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search', function() {
    this.route('results', { path: ':term' });
  });
  this.route('list', function() {
    this.route('new');
  });
});

export default Router;

App = Ember.Application.create();

App.Router.map(function() {
  this.route('home');
  this.route('portfolio');
  this.route('resume');});

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });

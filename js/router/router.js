App.Router.map(function(){
  this.route("about");
  this.route("resume");
  this.resource("portfolio", function(){
    this.route("project", {path: "/:project_id"});
});
});

App.PortfolioRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('project')
  }
});

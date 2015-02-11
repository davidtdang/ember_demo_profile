App.Router.map(function(){
  this.route("about");
  this.route("resume");
  this.route("portfolio");
  this.route("project", {path: "/portfolio/:project_id"});
});


App.PortfolioRoute = Ember.Route.extend({
  model: function(){
    return [
      {id: 1, title:"Taught Luke how to do shit"},
      {id: 2, title:"Got comically overpowered"},
      {id: 3, title:"Became left handed for awhile"},
      {id: 4, title:"Founded Murrica"},
      {id: 5, title:"Made some pureass rock candy"},
    ]
  }
})

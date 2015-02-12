App.Project = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string')
});

App.Project.FIXTURES = [
    {id: 1, title:"Taught Luke how to do shit", image: "jedi.jpg"},
    {id: 2, title:"Got comically overpowered",image: "wolverine.jpg"},
    {id: 3, title:"Became left handed for awhile", image: "link.jpg"},
    {id: 4, title:"Founded Murrica", image: "president.jpg"},
    {id: 5, title:"Made some pureass rock candy", image: "walter.jpg"},
  ]

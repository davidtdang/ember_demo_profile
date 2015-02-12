App.Project = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string')
});

App.Project.FIXTURES = [
    {id: 1, title:"Taught Luke how to do shit", image: "images/jedi.jpg"},
    {id: 2, title:"Got comically overpowered",image: "images/wolverine.jpg"},
    {id: 3, title:"Became left handed for awhile", image: "images/link.jpg"},
    {id: 4, title:"Founded Murrica", image: "images/president.jpg"},
    {id: 5, title:"Made some pureass rock candy", image: "images/walter.jpg"},
  ]

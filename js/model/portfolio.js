App.Project = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string')
});

App.Project.FIXTURES = [
    {id: 1, title:"Got too popular and overpowered",image: "images/wolverine.jpg"},
    {id: 2, title:"Made some pureass rock candy", image: "images/walter.png"},
    {id: 3, title:"Taught Luke how to do shit", image: "images/jedi.jpg"},
    {id: 4, title:"Learned how to be a leftie", image: "images/link.jpg"},
    {id: 5, title:"Founded 'Murrica", image: "images/president.jpg"},
  ]

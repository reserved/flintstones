The_FlintStones = new Backbone.Marionette.Application();

The_FlintStones.Character = Backbone.Model.extend({
defaults : {
    name : '',
  keywords : '',
}
});

The_FlintStones.Fred = new FlintStones.Character({
  'name': 'Fred FlintStone',
  'keyword': 'head loving husband father bowling accident-prone operator '
});

The_FlintStones.Wilma = new FlintStones.Character({
  'name': 'Wilma FlintStone',
  'keyword': 'intelligent level-headed expenses'
});

The_FlintStones.Pebbles = new FlintStones.Character({
  'name': 'Pebbles FlintStone',
  'keyword': 'infant newly-born'
});

The_FlintStones.Dino = new FlintStones.Character({
  'name': 'Dino the Dog',
  'keyword': 'pet dinosaur barks acts-like-a-dog'
});

The_FlintStones.Puss = new FlintStones.Character({
  'name': 'Baby Puss',
  'keyword': 'pet cat saber-toothed'
});

The_FlintStones.Group = new Backbone.Collection.extend({
  model : The_FlintStones.Character
});

The_FlintStones.FlintStones = new The_FlintStones.Group([The_FlintStones.Fred, The_FlintStones.Wilma,The_FlintStones.Pebbles,The_FlintStones.Dino,The_FlintStones.Puss]);

console.log(The_FlintStones.FlintStones);

The_FlintStones = new Backbone.Marionette.Application();

The_FlintStones.vent = _.extend({}, Backbone.Events);

The_FlintStones.addRegions({
  CharacterRegion: "#character_content"
});

The_FlintStones.Character = Backbone.Model.extend({
  defaults : {
    name : '',
    description : '',
    keywords : [],
  }
});

The_FlintStones.Fred = new The_FlintStones.Character({
  'name': 'Fred FlintStone',
  'description' : 'Fred Flintstone is the main character of the series. Fred is an accident-prone bronto-crane operator at the Slate Rock and Gravel Company and the head of the Flintstone clan. He is quick to anger (usually over trivial matters), but is a very loving husband and father. He is also good at bowling and is a member of the fictional "Loyal Order of Water Buffaloes" (Lodge No. 26), a men-only club paralleling real-life fraternities such as the Loyal Order of Moose.',
  'keywords': ['head', 'loving', 'husband', 'father', 'bowling', 'accident-prone', 'operator']
});

The_FlintStones.Wilma = new The_FlintStones.Character({
  'name': 'Wilma FlintStone',
  'description' : "Wilma Flintstone is Fred's wife. She is more intelligent and level-headed than her husband, though she often has a habit of spending money (with her and Betty's catchphrase being \"Da-da-da duh da-da CHARGE IT!!\"). She often is a foil to Fred's poor behavior.",
  'keywords': ['intelligent', 'level-headed', 'expenses']
});

The_FlintStones.Pebbles = new The_FlintStones.Character({
  'name': 'Pebbles FlintStone',
  'description' : "Pebbles Flintstone is The Flintstones' infant daughter, who is born near the end of the third season",
  'keywords': ['infant', 'newly-born']
});

The_FlintStones.Dino = new The_FlintStones.Character({
  'name': 'Dino the Dog',
  'description' : " a sauropod dinosaur, is the Flintstone's pet who barks and generally acts like a dog. A running gag in the series involves Dino knocking down Fred out of excitement and licking him repeatedly. Though this irritates Fred a lot, he generally likes Dino very much.",
  'keywords': ['pet', 'dinosaur', 'barks', 'acts-like-a-dog']
});

The_FlintStones.Puss = new The_FlintStones.Character({
  'name': 'Baby Puss',
  'description' : "Baby Puss is the Flintstones' pet saber-toothed cat, who is rarely seen in the actual series, but is always seen throwing Fred out of the house during the end credits, causing Fred to pound repeatedly on the front door and yell \"Wilma!\"",
  'keywords': ['pet', 'cat', 'saber-toothed']
});

The_FlintStones.Barney = new The_FlintStones.Character({
  'name': 'Barney Rubble',
  'description' : "Barney Rubble is the secondary main character and Fred's best friend and next door neighbor. His occupation is, for the most part of the series, unknown, though later series depict him working in the same quarry as Fred. He shares many of Fred's interests like bowling and golf, and is also a member of the \"Loyal Order of Water Buffaloes\". Though Fred and Barney frequently get into feuds with one another (usually due to Fred's short temper), their deep fraternal bond remains evident.",
  'keywords': ['neighbor', 'bowling', 'golf', 'loyal-order-of-water-buffaloes']
});

The_FlintStones.Betty = new The_FlintStones.Character({
  'name': 'Betty Rubble',
  'description' : "Betty Rubble is Barney's wife and Wilma's best friend. Like Wilma, she too has a habit of spending money",
  'keywords': ['expenses']
});

The_FlintStones.Bamm = new The_FlintStones.Character({
  'name': 'Bamm-Bamm Rubble',
  'description' : "Bamm-Bamm Rubble is the Rubbles' abnormally strong adopted son, whom they adopt during the fourth season; his name comes from the only phrase he ever speaks as a baby: \"Bamm, Bamm!\"",
  'keywords': ['abnormal','strong','adopted','bamm-bamm']
});

The_FlintStones.Hoppy = new The_FlintStones.Character({
  'name': 'Hopparoo',
  'description' : "Hoppy is the Rubbles' pet Hopparoo (a kangaroo/dinosaur combination creature), whom they adopt in the beginning of the fifth season. He babysits the kids as he takes them around in his pouch. Fred Flintstone regards Hoppy as an overgrown and obnoxious nuisance until the fateful day that the Flintstones and the Rubbles go out together on a picnic. The families' lives are endangered during the picnic and Hoppy goes for help.",
  'keywords': ['kangaroo','babysitting','overgrown','obnoxious','helper']
});


The_FlintStones.CharacterView = Marionette.ItemView.extend({
  template: Handlebars.compile($('#character').html()),
  // el:'#page_content'
});
//
// The_FlintStones.FredView = new The_FlintStones.CharacterView({model:The_FlintStones.Wilma});
//
// The_FlintStones.FredView.render();

The_FlintStones.FlintStones = new Backbone.Collection([The_FlintStones.Fred,The_FlintStones.Wilma,The_FlintStones.Pebbles,The_FlintStones.Dino,The_FlintStones.Puss],{
  model : The_FlintStones.Character
});

The_FlintStones.Rubbles = new Backbone.Collection([The_FlintStones.Barney,The_FlintStones.Betty,The_FlintStones.Bamm,The_FlintStones.Hoppy],{
  model : The_FlintStones.Character
});

The_FlintStones.GroupView = Marionette.CollectionView.extend({
  itemView: The_FlintStones.CharacterView,
    // el: '#page_content'
});

The_FlintStones.FlintStonesView = new The_FlintStones.GroupView({
  collection: The_FlintStones.FlintStones
});

The_FlintStones.RubblesView = new The_FlintStones.GroupView({
  collection: The_FlintStones.Rubbles
});

The_FlintStones.vent.on("switch:flintstones", function(){
  The_FlintStones.CharacterRegion.show(The_FlintStones.FlintStonesView);
});

The_FlintStones.vent.on("switch:rubbles", function(){
  The_FlintStones.CharacterRegion.show(The_FlintStones.RubblesView);
});

// The_FlintStones.FlintStonesView.render();

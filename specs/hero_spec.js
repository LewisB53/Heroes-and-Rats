var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');


describe('Hero',function(){

  var hero1;

  beforeEach(function(){
   hero1 = new Hero("Basil", 100, "crumpets");
   food1 = new Food("crumpets",20)
   food2 = new Food("apples", 10)

 })

  it ("Hero has name", function(){
    assert.strictEqual("Basil",hero1.name);
  }),

  it ("Hero has health", function(){
    assert.strictEqual(100,hero1.health);
  }),

  it ("Hero has favourite food", function(){
    assert.strictEqual("crumpets",hero1.favourite_food);
  })

  it ("Hero can talk", function(){
    assert.strictEqual("My name is Basil",hero1.talk());
  })

  it ("Hero starts with 0 tasks", function(){
    assert.strictEqual(0,hero1.tasks.length);
  })

  it("Hero gets health from Food", function(){
    hero1.eat(food2);
    assert.strictEqual(110, hero1.health);
  })

  it("Hero gets health bonus from favourite Food", function(){
    hero1.eat(food1);
    assert.strictEqual(130, hero1.health);
  })



})
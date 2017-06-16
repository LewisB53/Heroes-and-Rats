var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero',function(){

  var hero1;

  beforeEach(function(){
   hero1 = new Hero("Basil", 100, "apples");
 })

  it ("Hero has name", function(){
    assert.strictEqual("Basil",hero1.name);
  }),

  it ("Hero has health", function(){
    assert.strictEqual(100,hero1.health);
  }),

  it ("Hero has favourite food", function(){
    assert.strictEqual("apples",hero1.favourite_food);
  })

})
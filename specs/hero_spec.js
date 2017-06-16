var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero',function(){

  var hero1;

  beforeEach(function(){
   hero1 = new Hero("Basil");
 })

  it ("Hero has name", function(){
    assert.strictEqual("Basil",hero1.name);
  })

})
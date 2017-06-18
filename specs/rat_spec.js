var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');


describe('Rat',function(){

  var rat1;

  beforeEach(function(){
   rat1 = new Rat();
   food1 = new Food("crumpets",20)
   food2 = new Food("apples", 10)
   food3 = new Food("poisoned food", -10)
  })

  it ("can poison food", function(){
    assert.deepEqual(food3,rat1.poisonFood(food1));
  })

})

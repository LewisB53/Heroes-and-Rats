var assert = require('assert');
var Food = require('../food.js');

describe('Food',function(){

  var food1;

  beforeEach(function(){
   food1 = new Food("crumpets",20);
 })

  it("Food has name", function(){
    assert.strictEqual("crumpets",food1.name)
  })

  it("Food has replenishment value", function(){
    assert.strictEqual(20, food1.heal)
  })

})
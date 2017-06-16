var assert = require('assert');
var Food = require('../food.js');

describe('Food',function(){

  var food1;

  beforeEach(function(){
   food1 = new Food("crumpets");
 })

  it("Food has name", function(){
    assert.strictEqual("crumpets",food1.name)
  })

})
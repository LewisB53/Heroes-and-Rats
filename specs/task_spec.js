var assert = require('assert');
var Task = require('../task.js');

describe('Task',function(){

  var task1;

  beforeEach(function(){
   task1 = new Task("Easy");
 })

  it ("Task has difficulty level", function(){
    assert.strictEqual("Easy",task1.difficulty);
  })

})
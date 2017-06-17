var assert = require('assert');
var Task = require('../task.js');

describe('Task',function(){

  var task1;

  beforeEach(function(){
   task1 = new Task("Easy","whenever","A Clue",true);

 })

  it ("Task has difficulty level", function(){
    assert.strictEqual("Easy",task1.difficulty);
  })

  it ("Task has urgency level", function(){
    assert.strictEqual("whenever",task1.urgency);
  })

  it ("Task gives reward", function(){
    assert.strictEqual("A Clue",task1.reward);
  })

  it ("Task has completion status", function(){
    assert.strictEqual(true,task1.completion_status);
  })



})
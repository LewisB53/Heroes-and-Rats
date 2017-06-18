var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js')


describe('Hero',function(){

  var hero1;

  beforeEach(function(){
   hero1 = new Hero("Basil", 100, "crumpets");
   food1 = new Food("crumpets",20)
   food2 = new Food("apples", 10)

   task1 = new Task("go", 1,8,100,false);
   task2 = new Task("stop", 4,12,150,false);
   task3 = new Task("jump", 1,1,200,false);
   task4 = new Task("hop", 5,0,50,false);

   hero1.addTask(task1);
   hero1.addTask(task2);
   hero1.addTask(task3);
   hero1.addTask(task4);

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

  it("Hero gets health from Food", function(){
    hero1.eat(food2);
    assert.strictEqual(110, hero1.health);
  })

  it("Hero gets health bonus from favourite Food", function(){
    hero1.eat(food1);
    assert.strictEqual(130, hero1.health);
  })

  it("can add tasks", function(){
    assert.strictEqual(4, hero1.tasks.length);
  })

  it("can sort by difficulty", function(){
    hero1.sortByDifficulty();
    assert.strictEqual(5, hero1.tasks[3].difficulty);
  })

  it("can sort by urgency", function(){
    hero1.sortByUrgency();
    assert.strictEqual(12, hero1.tasks[3].urgency);
  })

  it("can sort by reward", function(){
    hero1.sortByReward();
    assert.strictEqual(200, hero1.tasks[3].reward);
  })

  it("can mark as completed", function(){
    hero1.markAsCompleted(task4);
    assert.strictEqual(true, hero1.tasks[3].status);
  })

  it("can view completed task", function(){
    hero1.markAsCompleted(task4);
    assert.strictEqual("hop", hero1.viewCompletedTask());
  })


})
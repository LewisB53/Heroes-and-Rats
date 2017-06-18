var _ = require ("lodash")
var completed = 0;

var Hero = function(name,health,favourite_food){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = [];
}


Hero.prototype = {

  talk: function() {
    return "My name is " + this.name;
  },

  eat: function(food){
    if(food.name === this.favourite_food){
    return this.health += (food.heal * 1.5);
    }
    else return this.health += food.heal;
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  sortByDifficulty: function () {
     this.tasks.sort(function(item1,item2){
        return item2.difficulty < item1.difficulty;
      })
     return this.tasks.slice();
  },

  sortByUrgency: function () {
     this.tasks.sort(function(item1,item2){
        return item2.urgency < item1.urgency;
      })
     return this.tasks.slice();
  },

  sortByReward: function () {
     this.tasks.sort(function(item1,item2){
        return item2.reward < item1.reward;
      })
     return this.tasks.slice();
  },

  markAsCompleted: function(passedTask) {
    for(task in this.tasks){
      if (this.tasks[task].name === passedTask.name){
      this.tasks[task].status = true}
    }
  },

  viewCompletedTask: function(){
    for(task in this.tasks){
      if(this.tasks[task].status === true){
      return this.tasks[task].name}
    };
  },

}
module.exports = Hero;
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
  }


}
module.exports = Hero;
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


}
module.exports = Hero;
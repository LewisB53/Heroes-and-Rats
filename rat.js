var Rat = function(){
}

Rat.prototype = {

  poisonFood: function(food) {
    food.name = "poisoned food"
    food.heal = -10
    return food
  },

  }
  module.exports = Rat;
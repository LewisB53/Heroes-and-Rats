var Task = function(difficulty,urgency,reward,completion_status){
  
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion_status = completion_status;
}


module.exports = Task;
var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer spinner ' + this.dancerNum + '"></span>');
  this.setPosition();

};


makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpinningDancer.prototype.step = function() {
  var context = this;
  context.oldStep();  
};




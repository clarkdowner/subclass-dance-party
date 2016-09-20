var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  noTouchingDancer.call(this, top, left, timeBetweenSteps);
};


makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpinningDancer.prototype.step = function() {

  this.oldStep();  
  this.$node.toggle();
};

var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};


makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpinningDancer.prototype.step = function() {

  this.oldStep();  
  this.$node.css({"transform-origin": "200% center",
                  "animation": "circle 2s infinite"});
};

// var keyframes = '@keyframes circle{
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                   }

//                   @keyframes inner-circle {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(-360deg); }
//                   }
//                   "transform-origin": "200% center",
//                   "animation": "circle 2s infinite"'




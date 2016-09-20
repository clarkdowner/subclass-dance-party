var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};


MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  var context = this;
  // var fn = function() {
  //   context.oldStep(this.timeBetweenSteps);
  //   console.log('MakeBlinkyDancer ran');
  // };
  // fn();

  // console.log(context.$node.toggle);
  context.oldStep();  
  // MakeDancer.prototype.step.call(this);
  context.$node.toggle();
};

// var tester = new MakeBlinkyDancer('top', 'left', 1000);
// // console.log(tester);
// tester.step();




//var blinkyDancer = new MakeBlinkyDancer(10, 20, 1000);
//blinkyDancer.step();


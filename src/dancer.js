// Creates and returns a new dancer object that can step
var counter = 0;

var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.dancerNum = counter;
  this.$node = $('<span class="dancer ' + counter + '"></span>');
  this.step();
  this.setPosition();
  counter++;
};



makeDancer.prototype.step = function() {
  var context = this;
  setTimeout(function() {
    context.step();
  }, context.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
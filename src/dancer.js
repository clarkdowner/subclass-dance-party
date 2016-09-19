// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};

MakeDancer.prototype.step = function() {
  var context = this;
  setTimeout(function() {
    context.step();
  }, context.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

// var tester = new MakeDancer('top', 'left', 2000);
// tester.step();
// // tester.step();



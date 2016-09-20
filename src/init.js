$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // blinkyDancer.js
    // console.log(dancerMakerFunction);
    // window.dancers.push(dancerMakerFunction);

    // make a dancer with a random position
    var counter = 0;

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );



    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


// Face Off Click Event
  $('.faceOffButton').on('click', function(event) {
    $('body').toggleClass('faceOffBackGround');
    $('span').toggleClass('faceOff');
  });

// Line Up Click Event
  $('.lineUpButton').on('click', function(event) {
    var width = $('body').width();
    
    for (var i = 0; i < window.dancers.length; i++) {
      var topValue = $('body').height() * .5 - dancers[i].top;
      var leftValue = (width / 2) - (50 * window.dancers.length) + (100 * i) - dancers[i].left;
      $(i).toggleClass('slide');  


      dancers[i].setPosition();
      // var leftValueArray = [];
      // leftValueArray[i] = leftValue;
    }
  });

});


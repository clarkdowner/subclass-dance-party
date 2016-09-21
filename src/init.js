$(document).ready(function() {
  window.dancers = [];
  window.faceOff = false;
  
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
    if (faceOff) {
      $('span').removeClass('faceOff');
      faceOff = false;
    } else {
      $('span').addClass('faceOff');
      faceOff = true;
    }

  });

// Line Up Click Event
  $('.lineUpButton').on('click', function(event) {
    var width = $('body').width();
    
    for (var i = 0; i < window.dancers.length; i++) {
      var topValue = $('body').height() * .5;
      var leftValue = (width / 2) - (50 * window.dancers.length) + (100 * i);

      dancers[i].top = topValue;
      dancers[i].left = leftValue;
      dancers[i].setPosition();
    }    
  });


// No Touching Click Event
  $('.noTouchingButton').on('click', function(event) {
    var width = $('body').width();
    var height = $('body').height();

    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {
        if (Math.sqrt(Math.pow(window.dancers[i].left, 2) + Math.pow(window.dancers[j].left, 2)) || Math.sqrt(Math.pow(window.dancers[i].top, 2) + Math.pow(window.dancers[j].top, 2)) < 50) {
          window.dancers[i].left -= Math.random() * 50;
          window.dancers[j].left += Math.random() * 50;
          window.dancers[i].top += Math.random() * 50;
          window.dancers[j].top -= Math.random() * 50;
        }
        dancers[i].setPosition();
        dancers[j].setPosition();
      }
    }
  });
});


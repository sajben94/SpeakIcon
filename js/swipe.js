
    $(function() {
      //Enable swiping...
      $(document).swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          alert("You swiped " + direction );
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
      });
    });

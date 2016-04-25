(function ($) {
  document.addEventListener('deviceready', onDeviceReady,false);

  function onDeviceReady() {
    document.addEventListener('pause', onPause,false);
    document.addEventListener('resume', onResume,false);
    $('.icon-wrapper').load('template/menu.html');

    $(document).on('touchstart','.menu-icon',function () {
      // alert('hele');
    $('.icon-wrapper').load('template/'+ $(this).attr('id')+'.html');

    if($(this).attr('id')=="menu"){
      $('.dlist').css('border', '2px solid transparent');
    }else{
      $('#'+addID).css('border', '2px solid red');
    }

    });

    var addID=1;
    $('#1').css('border', '2px solid red');
    $('#1').css('border', '2px solid transparent');

    $(document).on('touchstart','.dlist',function () {
      addID=$(this).attr('id');
      $('.dlist').css('border', '2px solid transparent');
      $(this).css('border', '2px solid red');
    });


    $(document).on('touchend','.add',function () {
      $('#'+addID).html($(this).clone().removeClass('add'));
        if (addID<4) {
          addID++;
          $('.dlist').css('border', '2px solid transparent');
          $('#'+addID).css('border', '2px solid red');
        }
    });





    //Keep track of how many swipes
    var count=0;
    //Enable swiping...
    $(document).swipe( {
      //Single swipe handler for left swipes
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
        $(this).text("You swiped " + direction + " " + ++count + " times " );
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold:0
    });


  }

  function onPause(){
  // code
  };

  function onResume(){
    //code
  };
})(jQuery);

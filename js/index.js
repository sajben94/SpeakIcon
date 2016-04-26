(function ($) {
  document.addEventListener('deviceready', onDeviceReady,false);

  function onDeviceReady() {
    document.addEventListener('pause', onPause,false);
    document.addEventListener('resume', onResume,false);
    $('.icon-wrapper').load('template/menu.html');




    $(document).on('touchend','.menu-icon',function () {
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
    // $('#1').css('border', '2px solid red');
    $('#1').css('border', '2px solid transparent');

    $(document).on('touchstart','.dlist',function () {
      addID=$(this).attr('id');
      $('.dlist').css('border', '2px solid transparent');
      $(this).css('border', '2px solid red');

      //swipe start
          var myElement = document.getElementById(addID);
          var mc = new Hammer(myElement);
          mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
          mc.on("panup", function(ev) {
            $('#'+addID).html('<i class="demo-icon icon-cancel">&#xe846;</i>');
          });
      //swipe end

    });


    $(document).on('touchend','.add',function () {
      $('#'+addID).html($(this).clone().removeClass('add'));
        if (addID<4) {
          addID++;
          $('.dlist').css('border', '2px solid transparent');
          $('#'+addID).css('border', '2px solid red');
        }
        else{
          addID=1;
          $('.dlist').css('border', '2px solid transparent');
          $('#'+addID).css('border', '2px solid red');
        }
    });
  }

  function onPause(){
  // code
  };

  function onResume(){
    //code
  };
})(jQuery);

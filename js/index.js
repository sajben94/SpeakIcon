(function ($) {
  document.addEventListener('deviceready', onDeviceReady,false);

  function onDeviceReady() {
    document.addEventListener('pause', onPause,false);
    document.addEventListener('resume', onResume,false);
    // Pridavanie menu ikoniek
    $('.icon-wrapper').load('template/menu.html');




    $(document).on('touchend','.menu-icon',function () {
      // Pridavanie ikoniek s kategorii
      $('.icon-wrapper').load('template/'+ $(this).attr('id')+'.html');

      //Pohybovanie cerveneho kruhu
      if($(this).attr('id')=="menu"){
        $('.dlist').css('border', '2px solid transparent');
        $('.icon-line').show();
      }else{
        $('#'+addID).css('border', '2px solid white');
      }
    });

      //Viznacovanie cerveneho kruhu
    var addID=1;
    $('#1').css('border', '2px solid white');
    $('#1').css('border', '2px solid transparent');

    //Editovanie dock ikoniek
    $(document).on('touchend','.dlist',function () {
      addID=$(this).attr('id');
      $('.dlist').css('border', '2px solid transparent');
      $(this).css('border', '2px solid white');

      //swipe start
      //Mazanie ikoniek
          var mc = new Hammer(this);
          mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
          mc.on("panup", function(ev) {
            $('#'+addID).html('<i class="demo-icon icon-cancel">&#xe846;</i>');

          });
          mc.on("press", function(ev) {
            // $('#'+addID).html('<i class="demo-icon icon-cancel">&#xe846;</i>');
          

              var dockIcons = $('.list').clone().find('i').attr('id','menu').addClass('menu-icon large');

            $('.icon-wrapper').html(dockIcons);
            $('.icon-line').hide();
            // $('.icon-wrapper').prepend('<i id="menu" class="demo-icon menu-icon ">&#xe892;</i>');
          });
      //swipe end

    });

    //Pridavanie ikoniek
    $(document).on('touchend','.add',function () {
      $('#'+addID).html($(this).clone().removeClass('add'));
        if (addID<4) {
          addID++;
          $('.dlist').css('border', '2px solid transparent');
          $('#'+addID).css('border', '2px solid white');
        }
        else{
          addID=1;
          $('.dlist').css('border', '2px solid transparent');
          $('#'+addID).css('border', '2px solid white');
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

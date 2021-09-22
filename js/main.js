 $(document).ready(function(){
   $('#click1').click(function(){
     $('.timg1').show();
     $('.timg2,.timg3').hide();
     $(this).addClass('white');
          $('#click2,#click3').removeClass('white');
   })



   $('#click2').click(function(){
     $('.timg2').show();
     $('.timg1,.timg3').hide();
       $(this).addClass('white');
          $('#click1,#click3').removeClass('white');
   })

   $('#click3').click(function(){
     $('.timg3').show();
     $('.timg1,.timg2').hide();
       $(this).addClass('white');
          $('#click1,#click2').removeClass('white');
   })

 })
$('.timg2,.timg3').hide();

 $('.clientreview').click(function(){
      $('.clientcomment').toggle('slow');
      $('.clientcommen').css("display","block");
 })
 
 $('.clientreview2').click(function(){
    $('.clientcomment2').toggle('slow');
    $('.clientcomment2').css("display","block");
})

$('.clientreview3').click(function(){
    $('.clientcomment3').toggle('slow');
    $('.clientcomment3').css("display","block");
})

$(document).ready(function(){
     $(window).scroll(function(){
          var navscroll = $(document).scrollTop();
        //   console.log(navscroll);

         if (navscroll >=200) {
             $('.navmenu').addClass('scroll');
             $('.text').css("color","black");
         }
         else{
              $('.navmenu').removeClass('scroll');
              $('.text').css("color","white");
         }

    })
})


$(document).ready(function(){
   $('#toggle').click(function(){
     $('.smmenu').slideToggle();

   })
})



 $('.smtoggle').click(function(){
   $('.mobmenu').slideToggle();
 })
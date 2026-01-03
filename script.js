
  $('#themeToggle').click(function(){
    $('body').toggleClass('light-mode');

    if($('body').hasClass('light-mode')){
      $(this).html('<i class="fas fa-sun"></i>');
    } else {
      $(this).html('<i class="fas fa-moon"></i>');
    }
  });



  $(document).ready(function(){
    $('.product-slider').slick({
      slidesToShow:3,
      autoplay:true,
      autoplaySpeed:2500,
      dots:true,
      arrows:false,
      responsive:[
        { breakpoint:900, settings:{ slidesToShow:2 }},
        { breakpoint:600, settings:{ slidesToShow:1 }}
      ]
    });
  });
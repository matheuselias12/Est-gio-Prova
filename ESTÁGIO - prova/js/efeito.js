$(document).ready(function(){

  $("#btn-bars").on("click", function(){

    $("header").toggleClass("open-menu");
  })

  $("#menu-mobile-mask").on("click", function(){

    $("header").removeClass("open-menu");
  })
  $("#page-up").on("click", function(event){

    $("body").animate({
      scrollTop:0
    }, 1000);

    event.preventDefault();

  });

})
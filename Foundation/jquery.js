$('.c-header__menu').click(function() {
    $("#header").addClass('active');
    $(".l-header__container").css("position","fixed");
    $("footer").css("position","fixed");
    $(".l-sidebar").css("right","0");
    $(".p-sidebar__btn").css("display","block");
});

$('.p-sidebar__btn').click(function() {
    $("#header").removeClass('active');
    $(".l-header__container").css("position","static");
    $("footer").css("position","static");
    $(".l-sidebar").css("right","-2000px");
    $(".p-sidebar__btn").css("display","none");
});

window.addEventListener('resize', function(){
    $("#header").removeClass('active');
    $(".l-header__container").css("position","static");
    $("footer").css("position","static");
    $(".l-sidebar").css("right","-2000px");
    $(".p-sidebar__btn").css("display","none");
  });
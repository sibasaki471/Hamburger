$(document).ready(function () {
    hsize = $("body").height();

    if (window.matchMedia('(max-width: 1070px)').matches){
        $(".l-sidebar").css("height",  hsize + "px");
    }else {
        $(".l-sidebar").css("height", "auto");
        $(".l-sidebar").css("display", "");
    }
  });
  $(window).resize(function () {
    hsize = $("body").height();

    if (window.matchMedia('(max-width: 1070px)').matches){
        $(".l-sidebar").css("height", hsize + "px");
    }else {
        $(".l-sidebar").css("height", "auto");
        $(".l-sidebar").css("display", "");
    }
  });

  $(function () {
    $('.p-sidebar__btn').on('click', function () {
      $('.l-sidebar').css("display", "none");

    })
  });

  $(function () {
    $('.c-header__menu').on('click', function () {
      $('.l-sidebar').css("display", "block");
    })
  });

        

  

        


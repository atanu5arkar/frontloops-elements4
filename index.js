
//submit btns functionality

$(".submit").click(function() {
    if($(this).hasClass("sub1")) {
        $(".details1").toggleClass("hide");
        $(".details2").toggleClass("show");
        $(".num2").toggleClass("activeNum");
        $(".name2").toggleClass("activeName");
    }
    else if($(this).hasClass("sub2")) {
        $(".details2").toggleClass("show");
        $(".details3").toggleClass("show");
        $(".num3").toggleClass("activeNum");
        $(".name3").toggleClass("activeName");
    }
    else {
        $(".details3").toggleClass("show");
        $(".confirmation").toggleClass("show");
    }
});

//back btns functionality

$(".back").click(function() {
    if($(this).hasClass("bk2")) {
        $(".details1").toggleClass("hide");
        $(".details2").toggleClass("show");
        $(".num2").toggleClass("activeNum");
        $(".name2").toggleClass("activeName");
    }
    else {
        $(".details2").toggleClass("show");
        $(".details3").toggleClass("show");
        $(".num3").toggleClass("activeNum");
        $(".name3").toggleClass("activeName");
    }
});

//step hover states
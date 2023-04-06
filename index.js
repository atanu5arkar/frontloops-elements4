
/* submit btns */

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

/* back btns */

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

/* to be able to click on step names, and making sure that a user cant't
skip steps */

$(".name").click(function() {

    if($(this).hasClass("name1")) {

        if($(".details2").hasClass("show")) {
            $(".details1").toggleClass("hide");
            $(".details2").toggleClass("show");
            $(".num2").toggleClass("activeNum");
            $(".name2").toggleClass("activeName");
        }
    }
    else if($(this).hasClass("name2")) {
        
        
        if (!$(".details1").hasClass("hide")) {
            $(".details1").toggleClass("hide");
            $(".details2").toggleClass("show");
            $(".num2").toggleClass("activeNum");
            $(".name2").toggleClass("activeName");
        }
        else if ($(".details3").hasClass("show")) {            
            $(".details3").toggleClass("show");
            $(".num3").toggleClass("activeNum");
            $(".name3").toggleClass("activeName");
            $(".details2").toggleClass("show");           
        }
    }
    else {        
        if ($(".details2").hasClass("show")) {
            $(".details2").toggleClass("show");
            $(".details3").toggleClass("show");
            $(".num3").toggleClass("activeNum");
            $(".name3").toggleClass("activeName");
        }
    }    
});

/* hover states for the last two step names */

$(".name").mouseenter(function() {

    if($(this).hasClass("name2")) {
        if(!$(".name2").hasClass("activeName")) {
            $(".num2, .name2").toggleClass("hoverColor");
        }
    }
    else if($(this).hasClass("name3")) {
        if(!$(".name3").hasClass("activeName")) {
            $(".num3, .name3").toggleClass("hoverColor");
        }
    }
});

$(".name").mouseleave(function() {

    if($(this).hasClass("name2")) {
        if(!$(".num2").hasClass("activeNum")) {
            $(".num2, .name2").toggleClass("hoverColor");
        }
    }
    else {
        if(!$(".num3").hasClass("activeNum")) {
            $(".num3, .name3").toggleClass("hoverColor");
        }
    }
});
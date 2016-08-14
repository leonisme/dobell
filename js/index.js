
$(function () {
    $('#fullpage').fullpage(
        {'sectionsColor':['#00A7EB','#11c5c3','#8c34e6','#cf1b52','#fc4242','#00A7EB'],
        'fixedElements':".header",
            'afterLoad':function(anchorLink,index){
                if(index==1){
                    /*$(function(){
                        $('.screenshot1').hover(function(){
                            clearInterval(timer1);
                        },function(){
                            timer1=setInterval(slide1,1500);
                        })
                    })*/
                }else if(index==2){
                    $('.text2').fadeIn(300);
                    $('.screenshot2').css('display','block');
                    $('.screen2').fadeIn(300);
                    setTimeout(function(){
                        timer2=setInterval(function(){
                            slide($('.b1'),$('.b2'),$('.b3'),$('.b4'));
                        },1500);
                        /*screenHover('.screenshot2',timer2,$('.b1'),$('.b2'),$('.b3'),$('.b4'));*/
                    },300);
                }else if(index==3){
                    $('.text3').fadeIn(300);
                    $('.screenshot3').css('display','block');
                    $('.screen3').fadeIn(300);
                    setTimeout(function(){
                        timer3=setInterval(function(){
                            slide($('.c1'),$('.c2'),$('.c3'),$('.c4'));
                        },1500);
                        /*screenHover('.screenshot3',timer3,$('.c1'),$('.c2'),$('.c3'),$('.c4'));*/
                    },300);
                }else if(index==4){
                    $('.text4').fadeIn(300);
                    $('.screenshot4').css('display','block');
                    $('.screen4').fadeIn(300);
                    setTimeout(function(){
                        timer4=setInterval(function(){
                            slide($('.d1'),$('.d2'),$('.d3'),$('.d4'));
                        },1500);
                        /*screenHover('.screenshot4',timer4,$('.d1'),$('.d2'),$('.d3'),$('.d4'));*/
                    },300);
                }else if(index==5){
                    $('.text5').fadeIn(300);
                    $('.screenshot5').css('display','block');
                    $('.screen5').fadeIn(300);
                    setTimeout(function(){
                        timer5=setInterval(function(){
                            slide($('.e1'),$('.e2'),$('.e3'),$('.e4'));
                        },1500);
                        /*screenHover('.screenshot5',timer5,$('.e1'),$('.e2'),$('.e3'),$('.e4'));*/
                    },300);
                }
            },
            'onLeave':function(index,nextIndex){
                if(index==1){
                    $('.header-nav').hide();
                    $('.navigation-link').show();
                    $('.screen1').fadeOut(700);
                    clearInterval(timer1);
                    setTimeout(function(){
                        $('.screenshot1').css('display','none');
                    },700);
                }else if(index==2){
                    $('.text2').fadeOut(300);
                    $('.screen2').fadeOut(700);
                    clearInterval(timer2);
                    setTimeout(function(){
                        $('.screenshot2').css('display','none');
                    },700);
                }else if(index==3){
                    $('.text3').fadeOut(300);
                    $('.screen3').fadeOut(700);
                    clearInterval(timer3);
                    setTimeout(function(){
                        $('.screenshot3').css('display','none');
                    },700);
                }else if(index==4){
                    $('.text4').fadeOut(300);
                    $('.screen4').fadeOut(700);
                    clearInterval(timer4);
                    setTimeout(function(){
                        $('.screenshot4').css('display','none');
                    },700);
                }else if(index==5){
                    $('.text5').fadeOut(300);
                    $('.screen5').fadeOut(700);
                    clearInterval(timer5);
                    if(nextIndex==6){
                        $('.phone').css('display','none');
                    }
                }
                if(nextIndex==1){
                    $('.header-nav').show();
                    $('.navigation-link').hide();
                    setTimeout(function(){
                        $('.screenshot1').css('display','block');
                        $('.screen1').fadeIn(700);
                    },700)
                    timer1=setInterval(slide1,1500);
                }else if(nextIndex==5){
                    setTimeout(function(){
                        $('.phone').css('display','block');
                    },700);
                }
            }
        }
    );
});
$(function(){
$('#navigation-link').toggle(function(){
    $('.nav-hamburger-line1:eq(0)').addClass('nav-hamburger-line1-toggle');
    $('.nav-hamburger-line2:eq(0)').addClass('nav-hamburger-line2-toggle');
    $('.nav-hamburger-line3:eq(0)').addClass('nav-hamburger-line3-toggle');
    $('.menu').show();
    $('.header').addClass('filter');
    $('.phone').addClass('filter');
    $('#fullpage').addClass('filter');
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
},function(){
    $('.nav-hamburger-line1:eq(0)').removeClass('nav-hamburger-line1-toggle');
    $('.nav-hamburger-line2:eq(0)').removeClass('nav-hamburger-line2-toggle');
    $('.nav-hamburger-line3:eq(0)').removeClass('nav-hamburger-line3-toggle');
    $('.menu').hide();
    $('.header').removeClass('filter');
    $('.phone').removeClass('filter');
    $('#fullpage').removeClass('filter');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
});
});

//showPage1
//showText1
$(function(){
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    var string="口袋小安让校园生活更加智慧便捷！";
    var i=0;
     var timer=setInterval(function(){
        if(i<3){
            var content1=string.substring(0,i+1);
            $('.text1-content1').html(content1);
            i++;
        }else if(i<string.length){
            var content1=string.substring(0,4);
            var content2=string.substring(4,i+1);
            $('.text1-content1').html(content1);
            $('.text1-content2').html(content2);
            i++;
        }
        else {
            clearInterval(timer);
        }
    },200);
    setTimeout(function(){
        $('.phone').animate({top:'15%'},300);
        $('.buttons').animate({top:'60%'},300);
        $('.down-button').animate({top:'80%'},300);
    },3200);
    setTimeout(function () {
        $('.a1').fadeOut(500);
    },4000);
    setTimeout(function(){
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
         timer1=setInterval(slide1,1500);
    },4500);
});

//slide1
function slide1(){
    if($('.a2').css('left')=='0px'){
        $('.a2').addClass('transition');
        $('.a3').addClass('transition');
        $('.a2').css('left','-226px');
        $('.a3').css('left','0px');
        setTimeout(function () {
            $('.a2').removeClass('transition');
            $('.a2').css('left','226px');
        },500);
    }else if($('.a3').css('left')=='0px'){
        $('.a3').addClass('transition');
        $('.a2').addClass('transition');
        $('.a3').css('left','-226px');
        $('.a2').css('left','0px');
        setTimeout(function () {
            $('.a3').removeClass('transition');
            $('.a3').css('left','226px');
        },500);
    }
}

//slide
function slide(one,two,three,four){
    if(one.css('left')=='0px'){
        one.addClass('transition');
        two.addClass('transition');
        three.addClass('transition');
        four.addClass('transition');
        one.css('left','-226px');
        two.css('left','0px');
        three.css('left','226px');
        four.css('left','452px');
    }else if(two.css('left')=='0px'){
        one.css('left','-452px');
        two.css('left','-226px');
        three.css('left','0px');
        four.css('left','226px');
    }else if(three.css('left')=='0px'){
        one.css('left','-768px');
        two.css('left','-452px');
        three.css('left','-226px');
        four.css('left','0px');
        setTimeout(function () {
            one.removeClass('transition');
            two.removeClass('transition');
            three.removeClass('transition');
            one.css('left','226px');
            two.css('left','452px');
            three.css('left','678px');
        },500);
    }else if(four.css('left')=='0px'){
        one.addClass('transition');
        two.addClass('transition');
        three.addClass('transition');
        one.css('left','0px');
        two.css('left','226px');
        three.css('left','452px');
        four.css('left','-226px');
        setTimeout(function () {
            four.removeClass('transition');
            four.css('left','678px');
        },500);
    }
}

//hover
function screenHover(screenshot,i,one,two,three,four){
    $(function(){
        $(screenshot).hover(function(){
            clearInterval(i);
        },function(){
            i=setInterval(function(){
                slide(one,two,three,four)},1500
            )
        })
    })
}

//down-button click
$(function(){
    $('.down-button').click(function(){
        $.fn.fullpage.moveSectionDown();
    })
})
//download click
$(function(){
    $('.links>li:lt(3)').click(function(){
        window.open($(this).attr('data-href'),"_self");
    })
})






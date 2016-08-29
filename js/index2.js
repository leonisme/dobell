var pageNumber;
$(function () {
    $('#fullpage').fullpage(
        {sectionsColor:['#00A7EB','#11c5c3','#8c34e6','#cf1b52','#fc4242','#00A7EB'],
        fixedElements:".header",
            afterLoad:function(anchorLink,index){
            if(index==1){
                pageNumber="a";
            }else if(index==2){
                    $('.text2').fadeIn(300);
                }else if(index==3){
                    $('.text3').fadeIn(300);
                }else if(index==4){
                    $('.text4').fadeIn(300);
                }else if(index==5){
                    $('.text5').fadeIn(300);
                }
            },
            onLeave:function(index,nextIndex){
                if(index==1){
                    $('.header-nav').hide();
                    $('.navigation-link').show();
                }else if(index==2){
                    $('.text2').fadeOut(300);
                }else if(index==3){
                    $('.text3').fadeOut(300);
                }else if(index==4){
                    $('.text4').fadeOut(300);
                }else if(index==5){
                    $('.text5').fadeOut(300);
                }else if(index==6){
                    setTimeout(function () {
                        $('.phone').css('display','block');
                    },700)
                }
                if(nextIndex==1){
                    $('.header-nav').show();
                    $('.navigation-link').hide();
                    pageNumber="a";
                }else if(nextIndex==2){
                    pageNumber="b";
                }else if(nextIndex==3){
                    pageNumber="c";
                }else if(nextIndex==4){
                    pageNumber="d";
                }else if(nextIndex==5){
                    pageNumber="e";
                }else if(nextIndex==6){
                    $('.phone').css('display','none');
                    pageNumber="f";
                }
            },
            navigation:true,
            navigationPosition:'right',
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
    $('#fp-nav').addClass('filter');
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
    $('#fp-nav').removeClass('filter');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
});
});

//showPage1
//showText1
$(function(){
    $('#fp-nav').css('display','none');
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
        $('#fp-nav').css('display','block');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    },4500);
});


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






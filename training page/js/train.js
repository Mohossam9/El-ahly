/* global $ */
/*  eslint-env browser */  

$(document).ready(function(){
    //variables
    var Slider=$('.slider');
    
    //start my bxslider trigger
    Slider.bxSlider({
        pager :false
    });
    
    
    //adjust header with window size
    $('header').height($(window).height());
    $(window).resize(function(){
        $('header').height($(window).height());
        Slider.each(function(){
        $(this).css({
            paddingTop : ($(window).height()-$(this).children().height())/2
            });
        });
        
       
        
    });
    
    //click on scroll btn
    $('.scrollbtn').on('click',function(){
        $('html').animate({
            scrollTop:0
        },600)
    });
    
    //window scrollbtn appearance
    $(window).on('scroll',function(){
        if($(this).scrollTop() >800)
            $('.scrollbtn').fadeIn(600);
        else
            $('.scrollbtn').fadeOut(600);
        if($(this).scrollTop()==0)
            $('nav ul li a:first-of-type').click();
    });
    
    //add and remove navbar events
    $('nav ul li a').on("click",function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    //adjust slider height
    Slider.each(function(){
        $(this).css({
            paddingTop : ($(window).height()-$(this).children().height())/2
        });
    });
    
    // nav items scroll
    $('nav ul li a').on("click",function(){
        $('html').animate({
            scrollTop : $('.'+$(this).data('scroll')).offset().top
        },600);
    });
    
    //gallery overlay with players name
    $('.gallery div').hover(function(){
        $(this).children().first().slideToggle();
    });
    
    //squad paragraph and span interval
   /* function createinterval(selector){
        var text = $(selector).data('typing'),
            len=text.length ,
            n=0,
            typer=setInterval(function(){
             $(selector).html($(selector).html()+text[n]);
             n++;
            if(n>=len)
                 clearInterval(typer);
        },60);
    }
    createinterval('.squad .squadshow p');
    createinterval('.squad .squadshow span');
    */
    
    //shift ahly squad
    (function slider(){
        
        $('.squad .squadshow div').each(function(){
        if($(this).hasClass('selected'))
        {
            if($(this).is(":not(:last-of-type)"))
            {
                $(this).removeClass('selected').fadeOut(1500,function(){
                  $(this).next().addClass('selected').fadeIn(1500,function(){
                      slider();
                  });  
                     
                });  
            }
            else
            {
                $(this).removeClass('selected').fadeOut(function(){
                      $(this).siblings(':first-of-type').addClass('selected').fadeIn(1500,function(){
                         slider();  
                      });  
                        
                    });       
            }   
        }
     });
})();
    
    //coaches names in gallery
    $('.coachs .showcoach >div').hover(function(){
        $(this).children().first().slideToggle();
    });
    
    //tabs of coaches
    $('.coachs .tabs span').on("click",function(){
        $(this).addClass('clicked').siblings().removeClass('clicked');
        var choice=$(this).data('choose');
        if(choice=='all')
         $('.coachs .showcoach div').fadeIn(100);
        else
         {
             $('.coachs .showcoach div').each(function(){
            if($(this).data('national')==choice)
            {
                 $(this).fadeIn(50);   
            }
            else
            {
                $(this).fadeOut(50);    
            }
             
             });
         }
    });
    
    
});
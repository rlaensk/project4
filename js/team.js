
    let mal1 = window.matchMedia('(min-width:320px) and (max-width:477px)').matches;
    let mal2 = window.matchMedia('(min-width:478px) and (max-width:599px)').matches;
    let mal3 = window.matchMedia('(min-width:600px) and (max-width:899px)').matches;
    let mal4 = window.matchMedia('(min-width:900px)').matches;


    


// 헤더 슬라이드 다운/업 헤더 호버 시 글씨 색 바꾸기
$(document).on('mouseenter','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideDown(400).css({"display":"block"});
}).on('mouseleave','.topmenu',function(){
    $(this).children(".hiddenmenu").stop().slideUp(400).css({"display":"none"});
});

// // slider 사진 바뀌기
$(function () {
    if (mal3||mal4) {
        var i = 0;
        $('.slider_text > div').css('background-color', '#44444417');
        $('.slider_text > div').eq(i).find('.slider_b').css('background-color', '#444444').stop().animate({
            width: '100%'
        }, 3000);
        $('.slider_text > div').css('background-color', 'transparent');



        function slider() {

            $('.slider_hidden').stop().animate({ marginLeft: -813 }, 800, function () {
                $('.slider_hidden > div:first').appendTo('.slider_hidden');
                $('.slider_hidden').css({ marginLeft: 0 });

            });

            i++;

            if (i >= $('.slider_text > div').length) {
                i = 0;
            }


            $('.slider_text > div').find('.slider_b').css({ backgroundColor: 'transparent', width: 0 });

            $('.slider_text > div').eq(i).css('background-color', '#44444417');
            $('.slider_text > div').eq(i).find('.slider_b').css('background-color', '#444444').stop().animate({
                width: '100%'
            }, 3000);
            $('.slider_text > div').css('background-color', 'transparent');


        }
       
    }
    setInterval(slider, 3000)
});



    function slider_() {

        $('.slider_hidden').stop().animate({ 'marginLeft': '-100%' }, 800, function () {
            $('.slider_hidden div:first').appendTo('.slider_hidden');
            $('.slider_hidden').css({ 'marginLeft': 0 });
        });
    }

    if (mal1||mal2) {
        setInterval(slider_, 2000);
    }


// sale
$(function(){
    if(mal1||mal2){
    $('.dot1').click(function(){
        $('.sale_item').stop().animate({'margin-left':0});
    });
    $('.dot2').click(function(){
        $('.sale_item').stop().animate({'margin-left':'-50%'});
    });
    $('.dot3').click(function(){
        $('.sale_item').stop().animate({'margin-left':'-100%'});
    });
    $('.dot4').click(function(){
        $('.sale_item').stop().animate({'margin-left':'-150%'});
    });
    }
});
// sale mal3
$(function(){
    if(mal3){
        $('.dot1').click(function(){
            $('.sale_item').stop().animate({'margin-left':0});
        });
        $('.dot2').click(function(){
            $('.sale_item').stop().animate({'margin-left':'-33%'});
        });
        $('.dot3').click(function(){
            $('.sale_item').stop().animate({'margin-left':'-66%'});
        });
     
        $('.dot4').css('display','none');
    }
    });


// games1

    $(function () {
       if(mal1){
       
        $('.g_dot1').click(function () {
            $('#games').stop().animate({ marginLeft: '-0' });
        });
        $('.g_dot2').click(function () {
            $('#games').stop().animate({ marginLeft: '-90%' });
        });
        $('.g_dot3').click(function () {
            $('#games').stop().animate({ marginLeft: '-185%' });
        });
    }
    });
    
    $(function () {
        if(mal2){
        
         $('.g_dot1').click(function () {
             $('#games').stop().animate({ marginLeft: '-0' });
         });
         $('.g_dot2').click(function () {
             $('#games').stop().animate({ marginLeft: '-110%' });
         });
         $('.g_dot3').click(function () {
             $('#games').stop().animate({ marginLeft: '-210%' });
         });
     }
     });
 
     $(function () {
        if(mal3){
        
         $('.g_dot1').click(function () {
             $('#games').stop().animate({ marginLeft: '-0' });
         });
         $('.g_dot2').click(function () {
             $('#games').stop().animate({ marginLeft: '-50%' });
         });
        
         $('.g_dot3').css('display','none');
     }
     });
 


// game2
$(function(){
    if(mal1){
    $('.g_dot2-1').click(function(){
        $('#games2').stop().animate({marginLeft:'-0'});
    });
    $('.g_dot2-2').click(function(){
        $('#games2').stop().animate({marginLeft:'-90%'});
    });
    $('.g_dot2-3').click(function(){
        $('#games2').stop().animate({marginLeft:'-185%'});
    });
    }
});

$(function(){
    if(mal2){
    $('.g_dot2-1').click(function(){
        $('#games2').stop().animate({marginLeft:'-0'});
    });
    $('.g_dot2-2').click(function(){
        $('#games2').stop().animate({marginLeft:'-98%'});
    });
    $('.g_dot2-3').click(function(){
        $('#games2').stop().animate({marginLeft:'-195%'});
    });
    }
});

$(function(){
    if(mal3){
    $('.g_dot2-1').click(function(){
        $('#games2').stop().animate({marginLeft:'-0'});
    });
    $('.g_dot2-2').click(function(){
        $('#games2').stop().animate({marginLeft:'-50%'});
    });
  
    $('.g_dot2-3').css('display','none');
    }
});


// popularity 사진넘기기
$(function () {
    if(mal3){
    $('.popularity_bt1 .prev').click(function () {
        $('.popular a:last').prependTo('.popular');
        $('.popular').css({ marginLeft: '-33%' });
        $('.popular').stop().animate({ marginLeft: 0 }, 700);
    });
    $('.popularity_bt1 .next').click(function () {
        $('.popular').stop().animate({ marginLeft: '-33%' }, 700, function () {
            $('.popular a:first').appendTo('.popular');
            $('.popular').css({ marginLeft: 0 });

        });
    });
}
});
// populartity
$(function () {
    if(mal4){
    $('.popularity_bt1 .prev').click(function () {
        $('.popular a:last').prependTo('.popular');
        $('.popular').css({ marginLeft: '-20%' });
        $('.popular').stop().animate({ marginLeft: 0 }, 700);
    });
    $('.popularity_bt1 .next').click(function () {
        $('.popular').stop().animate({ marginLeft: '-20%' }, 700, function () {
            $('.popular a:first').appendTo('.popular');
            $('.popular').css({ marginLeft: 0 });

        });
    });
}
});
// popularity 사진넘기기 mal2
$(function () {
    if(mal2){
    $('.popularity_bt1 .prev').click(function () {
        $('.popular a:last').prependTo('.popular');
        $('.popular').css({ marginLeft: -155 });
        $('.popular').stop().animate({ marginLeft: 0 }, 700);
    });
    $('.popularity_bt1 .next').click(function () {
        $('.popular').stop().animate({ marginLeft: -155 }, 700, function () {
            $('.popular a:first').appendTo('.popular');
            $('.popular').css({ marginLeft: 0 });

        });
    
    });
}
});

// popularity 사진넘기기 mal1
$(function () {
    if(mal1){
    $('.popularity_bt1 .prev').click(function () {
        $('.popular a:last').prependTo('.popular');
        $('.popular').css({ marginLeft: -198 });
        $('.popular').stop().animate({ marginLeft: 0 }, 700);
    });
    $('.popularity_bt1 .next').click(function () {
        $('.popular').stop().animate({ marginLeft: -198 }, 700, function () {
            $('.popular a:first').appendTo('.popular');
            $('.popular').css({ marginLeft: 0 });

        });
    
    });
}
});

// Ac
$(function(){
  
    $('.A_dot1').click(function(){
        $('.Ac_item').stop().animate({'margin-left':0});
    });
    $('.A_dot2').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-50%'});
    });
    $('.A_dot3').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-100%'});
    });
    $('.A_dot4').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-150%'});
    });
   
});

// Ac =mal1
$(function(){
    if(mal2){
  
    $('.A_dot1').click(function(){
        $('.Ac_item').stop().animate({'margin-left':0});
    });
    $('.A_dot2').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-33%'});
    });
    $('.A_dot3').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-33%'});
    });

}
});


// Ac =mal2
$(function(){
    if(mal1){
  
    $('.A_dot1').click(function(){
        $('.Ac_item').stop().animate({'margin-left':0});
    });
    $('.A_dot2').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-22%'});
    });
    $('.A_dot3').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-22%'});
    });

}
});
// Ac =mal3
$(function(){
    if(mal3){
  
    $('.A_dot1').click(function(){
        $('.Ac_item').stop().animate({'margin-left':0});
    });
    $('.A_dot2').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-33%'});
    });
    $('.A_dot3').click(function(){
        $('.Ac_item').stop().animate({'margin-left':'-66%'});
    });

}
});
// update 사진넘기기
$(function () {
    if(mal4){
    $('.popularity_bt2 .prev').click(function () {
        $('.update a:last').prependTo('.update');
        $('.update').css({ marginLeft: '-17%' });
        $('.update').stop().animate({ marginLeft: 0 }, 800);
    });
    $('.popularity_bt2 .next').click(function () {
        $('.update').stop().animate({ marginLeft: '-17%' }, 800, function () {
            $('.update a:first').appendTo('.update');
            $('.update').css({ marginLeft: 0 });
        });
    });
}
});


$(function () {
    if(mal3){
    $('.popularity_bt2 .prev').click(function () {
        $('.update a:last').prependTo('.update');
        $('.update').css({ marginLeft: '-25%' });
        $('.update').stop().animate({ marginLeft: 0 }, 800);
    });
    $('.popularity_bt2 .next').click(function () {
        $('.update').stop().animate({ marginLeft: '-25%' }, 800, function () {
            $('.update a:first').appendTo('.update');
            $('.update').css({ marginLeft: 0 });
        });
    });
}
});


// update 사진넘기기=mal2
$(function () {

    if(mal2){
   
    $('.popularity_bt2 .prev').click(function () {
        $('.update a:last').prependTo('.update');

        $('.update').css('margin-left', -165 );
        $('.update').stop().animate({ marginLeft: 0 }, 800);
    
    });
    $('.popularity_bt2 .next').click(function () {
        $('.update').stop().animate({ marginLeft: -165 }, 800, function () {
            $('.update a:first').appendTo('.update');
            $('.update').css({ marginLeft: 0 });
        });
    });
}


});
// update 사진넘기기=mal1
$(function () {
    if (mal1) {
        $('.popularity_bt2 .prev').click(function () {
            $('.update a:last').prependTo('.update');

            $('.update').css('margin-left', -200);
            $('.update').stop().animate({ marginLeft: 0 }, 800);

        });
        $('.popularity_bt2 .next').click(function () {
            $('.update').stop().animate({ marginLeft: -200 }, 800, function () {
                $('.update a:first').appendTo('.update');
                $('.update').css({ marginLeft: 0 });
            });
        });
    }
});



// img 마우스올리면 +아이콘 노출
$(function(){
    $('a').mouseenter(function(){
        $(this).find('.plus_p .plus').css('display','block');
        $(this).find('img:first').css('opacity','0.6');
    }).mouseleave(function(){
        $(this).find('.plus_p .plus').css('display','none');
        $(this).find('img').css('opacity','1');
    });    
});

$(function(){
    $('.plus_p').mouseenter(function(){
        $(this).find('.plus_p .plus').css('display','block');
        $(this).find('img:first').css('opacity','0.6');
    }).mouseleave(function(){
        $(this).find('.plus_p .plus').css('display','none');
        $(this).find('img').css('opacity','1');
    });    
});

// // +아이콘에 마우스올리면 Addwishlist+
$(function(){
    $('.plus_p>.plus').mouseenter(function(){
        $(this).siblings('span').css('visibility','visible');
    }).mouseleave(function(){
        $(this).siblings('span').css('visibility','hidden');
    });
});

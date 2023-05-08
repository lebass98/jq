$('document').ready(function(){
    var isExist = function($selector){
        var alength = arguments.length;
        if(alength > 1){
            return $(arguments[0]).length > 0 || $(arguments[1]).length > 0;
        }else{
            return $(arguments[0]).length > 0;
        }
    }
    if(isExist('.pop.halfPop')){
      $('.pop.halfPop').each(function(){
        var halfPopHeight = $(this).outerHeight();
        $(this).css('bottom', -halfPopHeight);
      });    
    }
});
 
function openUpPop(el){
    var temp = $('#' + el); //팝업의 id를 temp변수에 저장
    var tempHeight = temp.outerHeight();
    var dimm = $('.dim');
    $('body, html').css({'height':'auto','overflow':'hidden'});
    dimm.fadeIn(200);
    temp.stop().animate({'bottom': 0},200);
    Scroll.disable(temp);
    Scroll.disable(dimm);

    $('body').on('click touchstart', '.dim', function() {
      dimm.fadeOut(200);
      temp.stop().animate({'bottom': -tempHeight},200);
      $('body, html').css({'height': '','overflow':''});
    });

    temp.find('.button').on('click',function(e){     
        e.preventDefalut();

    });
}
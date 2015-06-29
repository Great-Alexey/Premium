
var i = 0;
$('#read').click(function(){
    if(i===0){
    $('.text').animate({height: '210px'},1000, function(){
        $('#moreText').css({display: 'block'});
        $('#read').text('скрыть');
    });  
    i=1;
    }
    else{
        $('.text').animate({height: '70px'},1000, function(){
        $('#moreText').css({display: 'none'});
        $('#read').text('читать далее...');
    });       
        i=0; 
    }
});

$(document).ready(function(){
    $('#up').hide();
    $(window).scroll(function(){
if ($(this).scrollTop() > 100) {
    $('#up').fadeIn();
} 
else {
    $('#up').fadeOut();
}
});
$('#up').click(function(){
   $('body').animate({ scrollTop: 0 }, 600);
    return false;
}); 
});
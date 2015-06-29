function toggleText() {
    var $this = $(this),
        $moreText = $('#moreText'),
        $text = $('.text'),
        i = $this.data('toggle');

    if(!i || i === '0'){
        $text.animate({height: '210px'},1000, function(){
            $moreText.css({display: 'block'});
            $this.text('������ �����...');
        }); 
        $this.data('toggle', 1);
    } else{
        $text.animate({height: '70px'},1000, function(){
            $moreText.css({display: 'none'});
            $this.text('������ �����...');
        });       
        $this.data('toggle', 0);
    }
}
$('#read').click(toggleText);

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
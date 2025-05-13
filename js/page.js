$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('light');
    }
    else{
        $('nav').removeClass('light');
    }
})
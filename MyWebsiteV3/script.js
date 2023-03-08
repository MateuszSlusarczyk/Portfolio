$(document).ready(function(){
    var scrollLink = $('.Nav');
    var scrollChange = $('.item');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700)
    })
    $(window).scroll(function(){
        var scrollBarLocation = $(this).scrollTop();
        scrollChange.each(function(){
            var sectionOffset = $(this.hash).offset().top-20;
            if(sectionOffset <= scrollBarLocation){
                $(this).addClass('Current');
                $(this).siblings().removeClass('Current');
            }
        })
    })
})
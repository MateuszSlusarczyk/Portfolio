$(document).ready(function(){
    var scrollLink = $('.Nav');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700)
    })
})

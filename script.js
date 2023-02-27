var buttons = document.querySelectorAll(".Nav");
var sections = document.querySelectorAll(".view");

buttons[0].addEventListener("click", function(){
    sections[0].classList.add('active');
    window.location.href='#Omnie';
})
buttons[1].addEventListener("click", function(){
    sections[1].classList.add('active');
    window.location.href='#Omnie';
})
buttons[2].addEventListener("click", function(){
    sections[2].classList.add('active');
    window.location.href='#Omnie';
})
buttons[3].addEventListener("click", function(){
    sections[3].classList.add('active');
})

$(document).ready(function(){
    var scrollLink = $('.Nav');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700)
    })


$(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
        var sectionOffset = $(this.hash).offset().top-20;
        if(sectionOffset <= scrollBarLocation){
            $(this).addClass('Current');
            $(this).siblings().removeClass('Current');
        }
    })
})
})
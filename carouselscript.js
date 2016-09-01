$(function(){
   
    var carouselList = $("#carousel ul");
    var prev = $(".glyphicon-chevron-left");
    var next = $(".glyphicon-chevron-right");
    var current = 0,
        offset = -400;

    prev.click( function () {
        current--;
        if (current < 0){
            current =     carouselList.find('li').length-2;
        }
        carouselList.css({marginLeft: current*offset });
    }) ;

    next.click( function () {
        current++;
        if (current == carouselList.find('li').length-1){
            current = 0;
        }
        carouselList.css({marginLeft: current*offset });
    }) ;

    function changeSlide(selected) {

        if (selected = undefined) {
            current = selected;
        } 
        else {
            current++;
        }

        if (current >= carouselList.find('li').length - 1) {

            carouselList.animate({marginLeft: current*offset }, 500, function() {

              current = 0;
              carouselList.css({marginLeft: current*offset });
            });

        }
        else {

            carouselList.animate({marginLeft: current*offset }, 500);
        }
    }
  
    setInterval(changeSlide, 5000);
});
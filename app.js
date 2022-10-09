function leftScroll() {
    const left = document.querySelector(".scrolling-wrapper");
    left.scrollBy(-500, 0);
}
function rightScroll() {
    const right = document.querySelector(".scrolling-wrapper");
    right.scrollBy(500, 0);
}


$(function () {
    var scrollLeftPrev = 0;
    $('#scrolling-wrapper').scroll(function () {
        // console.log($('#scrollquestion').width());
        // console.log($('#scrollquestion').scrollLeft());
        var $elem = $('#scrolling-wrapper');
        var newScrollLeft = $elem.scrollLeft(),
            width = $elem.outerWidth(),
            scrollWidth = $elem.get(0).scrollWidth;
        if (scrollWidth - newScrollLeft == width) {
            document.querySelector('#featured-right').classList.add('button-gone');
        }
        else {
            document.querySelector('#featured-right').classList.remove('button-gone');
        }
        if (newScrollLeft === 0) {
            document.querySelector('#featured-left').classList.add('button-gone');
        }
        else {
            document.querySelector('#featured-left').classList.remove('button-gone');
        }

        scrollLeftPrev = newScrollLeft;
    });
});

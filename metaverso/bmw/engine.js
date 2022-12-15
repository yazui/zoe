$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('').fadeOut(200);
    } else {
        $('').fadeIn(200);
    }
});
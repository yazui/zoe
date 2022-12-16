//scrollto
var scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 800);
}

// load
const myTimeout = setTimeout(myGreeting, 1000);
function myGreeting() {
    $(".load").fadeOut();
    $("#content").fadeIn();
}

// include
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("import");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("import");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

// random 
(function($) {
    $.fn.shuffle = function() {
        // credits: http://bost.ocks.org/mike/shuffle/
        var m = this.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = this[m];
            this[m] = this[i];
            this[i] = t;
        }

        return this;
    };
}(jQuery));

// index typo motion
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter.typeString('Hello, meu nome é ZOE')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Sou uma Assistente Virtual')
    .pauseFor(2500)
    .deleteChars(18)
    .typeString('<strong>Inteligência Artificial</strong>')
    .pauseFor(2500)
    .start();

// navigation
function nav(){
    $(".nav-screen").slideDown();
    $(".best").animate({top: '40px'}, 400);
    $(".nav-screen-close").slideDown();
    $(".nav-section").delay(200).fadeIn();
    $(".nav-section-div").delay(300).animate({width: '250px'}, 400);
    $(".nav-section-loop").delay(600).animate({opacity: '1', top: '200'}, 300);

}
function closeNav(){
    $(".nav-screen").slideUp();
    $(".best").animate({top: '-200px'}, 600);
    $(".nav-screen-close").slideUp();
    $(".nav-section").fadeOut();
    $(".nav-section-div").animate({width: '1px'}, 400);
    $(".nav-section-loop").animate({opacity: '0', top: '190'}, 300);
}

// news
function goNews(){
    scrollTo("#news");
}
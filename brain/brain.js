// load
const myTimeout = setTimeout(myGreeting, 2000);
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

// fancybox
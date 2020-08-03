/* SCRIPT 'IR HACIA ARRIBA' */

$(document).ready(function() {
    //Hacia arriba
    irArriba();
});

function irArriba() {
    $(".ir-arriba").click(function() {
        $("body,html").animate({ scrollTop: "0px" }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(".ir-arriba").slideDown(600);
        } else {
            $(".ir-arriba").slideUp(600);
        }
    });
    $(".ir-abajo").click(function() {
        $("body,html").animate({ scrollTop: "1000px" }, 1000);
    });
}

/* FIN DE SCRIPT 'IR HACIA ARRIBA' */


/* SCRIPT PARA LOS 'HREF INTERNOS' ANIMADOS */

$(function() {
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
});

/*FIN DE SCRIPT PARA LOS 'HREF INTERNOS' ANIMADOS */
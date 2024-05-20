$(document).ready(function () {
    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // Waypoints
    $('.work').waypoint(function () {
        $('.work').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.download').waypoint(function () {
        $('.download .btn').addClass('animated tada');
    }, {
        offset: '75%'
    });

    // Fancybox
    $('.work-box').fancybox();

    // Flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
        slideshowSpeed: 10000,
    });

    // Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - 76
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function () {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });
});

function callReturn() {
    let modal = document.getElementById('modal-number-phone');
    if (!modal.classList.contains('active')) {
        modal.classList.add('active');
        if (modal.dataset.close === 'false') {
            modal.addEventListener('click', function (e) {
                let element = e.target;
                if (element.classList.contains('modal-close') || element === modal) {
                    modal.classList.remove('active');
                }
                modal.dataset.close = 'true';
            });
        }
    }
}

function sendDataModal() {
    $('#modal').modal('hide');
}
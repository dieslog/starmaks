window.addEventListener('load', function () {
    scrollPage();
});

let navbar = document.querySelector('header .navbar');

let navbar_nav = navbar.querySelector('.navbar-nav');

window.addEventListener('scroll', function () {
    scrollPage();
});

function scrollPage() {
    if (navbar) {
        if (window.scrollY > 70) {
            if (!navbar.classList.contains('navbar-scroll-active')) {
                navbar.classList.add('navbar-scroll-active');
            }
        } else {
            if (navbar.classList.contains('navbar-scroll-active')) {
                navbar.classList.remove('navbar-scroll-active');
            }
        }
    }
}

if (navbar_nav) {
    navbar_nav.addEventListener('click', function (e) {
        let element = e.target;
        if (element.classList.contains('nav-link')) {
            if (!element.classList.contains('active')) {
                let old_active = navbar.querySelector('.nav-link.active');
                if (old_active) {
                    old_active.classList.remove('active');
                }
                element.classList.add('active');
            }
        }
    });
}

$(function () {
    $('.list-skill').animatedHeadline({
        animationType: 'clip',
        animationDelay: 700,
    });
})

window.addEventListener('show.bs.collapse', function () {
    if (!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
    }
});

window.addEventListener('hide.bs.collapse', function () {
    if (navbar.classList.contains('navbar-active')) {
        navbar.classList.remove('navbar-active');
    }
});

let btn_submit = document.querySelector('button[type="submit"]');

btn_submit.addEventListener('click', function (e) {
    e.preventDefault();
    let email = document.forms[0].email.value;
    let message = document.forms[0].message.value;
    if (email && message) {
        let formData = new FormData(document.forms[0]);
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    informer('Thank you! Your email send!');
                    document.forms[0].reset();
                } else {
                    informer('Ops... Something wrong!', 'warning');
                }
            }
        }
        httpRequest.open('POST', 'mail.php', true);
        httpRequest.send(formData);
    } else {
        informer('email or message are empty ((', 'warning');
    }
})
;

function informer(message, type = 'success') {
    toastr.options.timeOut = 2000;
    toastr.options.preventDuplicates = true;
    toastr.options.positionClass = 'toast-top-center';
    if (type === 'success') {
        toastr.success(message);
    } else if (type === 'warning') {
        toastr.warning(message);
    }
}
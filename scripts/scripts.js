jQuery(function () {


    $('.enter').on('click', function () {
        $('._enter.popup_wrapper').addClass('_active');
        $('.black_href').addClass('_active');
    })
    $('.register_btn').on('click', function () {
        $('._register.popup_wrapper').addClass('_active');
        $('.black_href').addClass('_active');
    })
    $('._become_client').on('click', function () {
        $('._popup').removeClass('_active');
        $('._thanks.popup_wrapper').addClass('_active');
        $('.black_href').addClass('_active');
    })
    $('.black_href').on('click', function () {
        $('._popup').removeClass('_active');
        $('.black_href').removeClass('_active');
    })

    $('.cross').on('click', function () {
        $('._popup').removeClass('_active');
        $('.black_href').removeClass('_active');
    })

    $('.link_title').click(function () {
        if ($('html').width() < 900) {
            $(this).siblings().slideToggle();
            $(this).toggleClass('_active');
        }
    })
    $('.burger').click(function () {
        $(this).toggleClass('_active');
        $('.lower').toggleClass('_active');
    })
    if ($('html').width() < 900) {
        $('.enter._header').appendTo($('.lower>.wrapper'))
        $('.lang').appendTo($('.lower>.wrapper'))
        $('.number._header').appendTo($('.lower>.wrapper'))
        $('.socials._header').appendTo($('.lower>.wrapper'))
    }

    $(window).resize(function () {
        if ($('html').width() < 900) {
            $('.enter._header').appendTo($('.lower>.wrapper'))
            $('.lang').appendTo($('.lower>.wrapper'))
            $('.number._header').appendTo($('.lower>.wrapper'))
            $('.socials._header').appendTo($('.lower>.wrapper'))
        } else {
            $('.socials._header').insertAfter($('.logo._main'))
            $('.number._header').insertAfter($('.socials._header'))
            $('.lang').insertAfter($('.number._header'))
            $('.enter._header').insertAfter($('.lang'))
        }
    })
    $('.slider_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: true,
        fade: true,
        appendDots: $('.slider_main_controls'),

    })
    $('.slider_body').slick('slickNext');
    $('.slider_laptop_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        nextArrow: $('.slider_laptop_cintrols>.arrow_next'),
        prevArrow: $('.slider_laptop_cintrols>.arrow_prev'),
    })

    document.querySelectorAll('.slick-dots>li').forEach(el => {
        el.innerHTML += '<canvas></canvas>'
    })
    $('.slider_body').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        var canvas = document.querySelectorAll('.slick-dots>li>canvas')[currentSlide];
        var ctx = canvas.getContext('2d');
        canvas.width = 12;
        canvas.height = 12;

        let angle = 0;
        let step = Math.PI / 180;


        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#fff';
        ctx.arc(6, 6, 3, 0, angle);
        ctx.stroke();


        let interval = setInterval(function () {

            if (angle <= 2 * Math.PI) {
                write(angle);
                angle += step;
            } else {


                if ($('.slider_body').slick('slickCurrentSlide') == 2) {
                    $('.slider_body').slick('slickGoTo', 0);
                } else {
                    $('.slider_body').slick('slickNext');
                }
                clearInterval(interval);
            }
        }, 10)

        function write(angle) {
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#fff';
            ctx.arc(6, 6, 3, 0, angle);
            ctx.stroke();
        }


    });
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('keydown', function () {
            if (this.value.length > 0) {
                this.parentElement.classList.add('_focused');
            } else {
                this.parentElement.classList.remove('_focused');
            }
        })
        document.querySelectorAll('.mail').forEach(el => {
            el.addEventListener('change', function () {
                function validateEmail(email) { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(String(email).toLowerCase()); }
                if (validateEmail(this.value)) {
                    this.parentElement.classList.remove('_error');

                } else {
                    this.parentElement.classList.remove('_focused');
                    this.parentElement.classList.add('_error');
                }
            })
        })

    }

});

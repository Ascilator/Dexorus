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
        appendDots: $('.slider_main_controls'),
    })
    $('.slider_laptop_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: $('.slider_laptop_cintrols>.arrow_next'),
        prevArrow: $('.slider_laptop_cintrols>.arrow_prev'),
    })



});

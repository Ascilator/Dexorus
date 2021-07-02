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
        $('.popup_video').removeClass('_active');
        $('.popup_video>.container').empty();
    })

    $('.cross').on('click', function () {
        $('._popup').removeClass('_active');
        $('.black_href').removeClass('_active');
    })

    $('.link_title').click(function () {
        if ($('html').width() < 900) {
            $('.link_title').not(this).removeClass('_active')
            $('.link_title').not(this).siblings().slideUp();
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
        $('.lang._header').appendTo($('.lower>.wrapper'))
        $('.number._header').appendTo($('.lower>.wrapper'))
        $('.socials._header').appendTo($('.lower>.wrapper'))
    }

    $(window).resize(function () {
        if ($('html').width() < 900) {
            $('.enter._header').appendTo($('.lower>.wrapper'))
            $('.lang._header').appendTo($('.lower>.wrapper'))
            $('.number._header').appendTo($('.lower>.wrapper'))
            $('.socials._header').appendTo($('.lower>.wrapper'))
        } else {
            $('.socials._header').insertAfter($('.logo._main'))
            $('.number._header').insertAfter($('.socials._header'))
            $('.lang._header').insertAfter($('.number._header'))
            $('.enter._header').insertAfter($('.lang._header'))
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
    $('.slider_sert').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: true,
        appendDots: $('.slider_sert_controls'),

    })

    $('.slider_adv_body').slick({
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        infinite: false,
        nextArrow: $('.slider_adv_cintrols>.arrow_next'),
        prevArrow: $('.slider_adv_cintrols>.arrow_prev'),

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


    let interval;
    let angle = 0;
    let step = Math.PI / 180;
    let bool = false;
    let is_in_slider = false;
    $('.slider_body').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        var canvas = document.querySelectorAll('.slick-dots>li>canvas')[currentSlide];
        var ctx = canvas.getContext('2d');
        canvas.width = 12;
        canvas.height = 12;

        angle = 0;
        step = Math.PI / 180;


        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#fff';
        ctx.arc(6, 6, 3, 0, angle);
        ctx.stroke();
        if (!is_in_slider) {
            clearInterval(interval)
            interval = setInterval(function () {

                if (angle <= 2 * Math.PI) {
                    write(angle, ctx);
                    angle += step;
                } else {


                    if ($('.slider_body').slick('slickCurrentSlide') == 2) {
                        $('.slider_body').slick('slickGoTo', 0);
                    } else {
                        $('.slider_body').slick('slickNext');
                    }
                    clearInterval(interval);
                }
            }, 20)
        }
        if (is_in_slider) {
            ctx = document.querySelectorAll('.slick-dots>li>canvas')[currentSlide].getContext('2d');

            slider_hover(ctx);
        } else {
            slider_hover(ctx);
        }






    });
    function write(angle, ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#fff';
        ctx.arc(6, 6, 3, 0, angle);
        ctx.stroke();
    }

    function slider_hover(ctx) {
        var slider = document.querySelector('.slider_cont');




        slider.addEventListener('mouseenter', function () {

            if (!is_in_slider) {
                clearInterval(interval);
                is_in_slider = true;
            }
        })
        slider.addEventListener('mouseleave', function () {
            if (is_in_slider) {
                interval = setInterval(function () {
                    if (angle <= 2 * Math.PI) {
                        write(angle, ctx);
                        angle += step;
                    } else {


                        if ($('.slider_body').slick('slickCurrentSlide') == 2) {
                            $('.slider_body').slick('slickGoTo', 0);
                        } else {
                            $('.slider_body').slick('slickNext');
                        }
                        clearInterval(interval);
                    }
                }, 20)
                is_in_slider = false;
            }
        })
    }
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

    function tabs() {
        $('.tab_body_cont').not($('.tab_body_cont').eq(0)).hide();
        $('.tab_result').not($('.tab_result').eq(0)).hide();


        $('.tab_link').click(function () {
            $('.tab_link').not(this).removeClass('_active');
            $('.tab_body_cont').not($('.tab_body_cont').eq($(this).index())).hide();
            $('.tab_result').not($('.tab_result').eq($(this).index())).hide();



            $('.tab_result').eq($(this).index()).fadeIn();
            $('.tab_body_cont').eq($(this).index()).fadeIn();
            $(this).addClass('_active');


        })


        $('.tab_slider_link').click(function () {
            $('.tab_slider_link').not(this).removeClass('_active');
            $('.tab_body_cont').not($('.tab_body_cont').eq($(this).attr('index'))).hide();
            $('.tab_result').not($('.tab_result').eq($(this).attr('index'))).hide();



            $('.tab_result').eq($(this).attr('index')).fadeIn();
            $('.tab_body_cont').eq($(this).attr('index')).fadeIn();
            $(this).addClass('_active');


        })
    }
    function catalog_btns() {
        $('.show_more_btn').click(function () {
            $(this).siblings('.labels_cont').children('.label_add_cont').slideToggle();
            $(this).toggleClass('_active');
            if ($(this).children('.text').text() === "Показать больше") {
                $(this).children('.text').text("Cвернуть")
            } else {
                $(this).children('.text').text("Показать больше")
            }
        })
    }
    catalog_btns();
    function dynamic_adaptiv() {
        if ($('html').width() < 800) {
            $('.adv_footer').append($('.slider_adv_cintrols'))
            for (let i = 0; i < $('.right_item_part').length; i++) {
                $('.right_item_part>.img').eq(0).prependTo($('.catalog_item').eq(i))
                $('.right_item_part>.invest_btn').eq(0).insertAfter($('.catalog_item>.left_item_part>.labels_cont').eq(i))

            }
        }
        $(window).resize(function () {
            if ($('html').width() < 800) {
                $('.adv_footer').append($('.slider_adv_cintrols'))
                for (let i = 0; i < $('.right_item_part').length; i++) {
                    $('.right_item_part>.img').eq(0).prependTo($('.catalog_item').eq(i))
                    $('.right_item_part>.invest_btn').eq(0).insertAfter($('.catalog_item>.left_item_part>.labels_cont').eq(i))
                }
            } else {
                $('.slider_adv_cintrols').appendTo($('._adv_header'))
                for (let i = 0; i < $('.right_item_part').length; i++) {
                    $('.catalog_item>.img').eq(0).appendTo($('.catalog_item>.right_item_part').eq(i))
                    $('.invest_btn').eq(i).appendTo($('.catalog_item>.right_item_part').eq(i))
                }
            }
        })
    }
    function range_calc() {
        let sliders = $('.js-range-slider');
        let labels = $('.tab_result');

        const stonk_koeff = [
            0.0037,
            0.0049,
            0.0064
        ];
        const val = [
            {
                min: 100,
                max: 2999,
            },
            {
                min: 1,
                max: 365,
            },
            {
                min: 3000,
                max: 8499,
            },
            {
                min: 1,
                max: 365,
            },
            {
                min: 8500,
                max: 30000,
            },
            {
                min: 1,
                max: 365,
            },
        ]
        for (let i = 0; i < sliders.length; i++) {
            if (i % 2 === 1) {
                createSlider(sliders.eq(i), val[i], true, i);

            } else {
                createSlider(sliders.eq(i), val[i], false, i);
                setLabelText(labels.eq(Math.floor(i / 2)), val[i], i / 2);
            }
        }
        function setLabelText(label, { _, max }, i) {
            let stonk_text = Math.round(max * .7 + stonk_koeff[i] * 365 * 0.7);
            label.children('.box_cont').children('.block_desc').children('span').text(stonk_text)
        }
        function getLabelText(data_value, slider_data, i) {
            let date_value = +data_value.split('').filter(el => {
                return el !== ' ' && el !== '$' && el !== 'д' && el !== 'е' && el !== 'н' && el !== 'й'
            }).join('');

            let price_value = +slider_data.split('').filter(el => {
                return el !== ' ' && el !== '$' && el !== 'д' && el !== 'е' && el !== 'н' && el !== 'й'
            }).join('');


            return Math.floor(price_value * date_value * stonk_koeff[i]);
        }


        function createSlider(slider, { min, max }, date = false, i) {
            const input = slider.siblings('.line_cont').children('.gray_back').children();
            slider.ionRangeSlider({
                type: "double",
                min: min,
                max: max,
                from: 0,
                to: .7 * max,
                postfix: "$",
                from_fixed: true,
                onStart: function (data) {
                    if (date) {
                        input.text(data.to_pretty + ' дней');
                        let where_text = labels.eq(Math.floor(i / 2)).children('.box_cont').children('.block_desc')
                        where_text.text('$ ' + getLabelText(data.to_pretty, sliders.eq(i - 1).siblings('.line_cont').children('.gray_back').children().text(), Math.floor(i / 2)))
                    } else {
                        input.text(data.to_pretty + ' $');
                        let where_text = labels.eq(Math.floor(i / 2)).children('.box_cont').children('.block_desc')
                        where_text.text('$ ' + getLabelText(data.to_pretty, sliders.eq(i + 1).siblings('.line_cont').children('.gray_back').children().text(), Math.floor(i / 2)))
                    }
                },
                onChange: function (data) {
                    if (date) {
                        input.text(data.to_pretty + ' дней');
                        let where_text = labels.eq(Math.floor(i / 2)).children('.box_cont').children('.block_desc')
                        where_text.text('$ ' + getLabelText(data.to_pretty, sliders.eq(i - 1).siblings('.line_cont').children('.gray_back').children().text(), Math.floor(i / 2)))
                    } else {
                        input.text(data.to_pretty + ' $');

                        let where_text = labels.eq(Math.floor(i / 2)).children('.box_cont').children('.block_desc')
                        where_text.text('$ ' + getLabelText(data.to_pretty, sliders.eq(i + 1).siblings('.line_cont').children('.gray_back').children().text(), Math.floor(i / 2)))
                    }

                }
            });
        }
    }

    function scroll() {
        const year = document.querySelector('.year');
        const next_year = document.querySelector('.next_year');

        const years_item = document.querySelectorAll('.year_item');

        const scroll_block = document.querySelector('.history_company');
        if (!scroll_block) {
            return
        }
        const footer = document.querySelector('.footer');
        if (document.documentElement.clientWidth > 1000) {
            footer.style.display = "none";
        }
        scroll_block.addEventListener('scroll', function (e) {


            if (document.documentElement.clientWidth > 1000) {
                let number;
                let height = 0;
                for (let i = 0; i < years_item.length; i++) {
                    if (height < scroll_block.scrollTop - 100) {

                    } else {
                        number = i;
                        // if (number === 6) {
                        //     i++;
                        // }
                        document.querySelectorAll('.year_item').forEach(e => {
                            e.classList.remove('_active');
                        })
                        let item = document.querySelectorAll('.year_item')[i];
                        if (item) {
                            item.classList.add('_active')
                        } else {
                            document.querySelectorAll('.year_item')[0].classList.add('_active')
                        }

                        break;
                    }
                    height += years_item[i].getBoundingClientRect().height;
                }
                if (scroll_block.scrollTop >= scroll_block.scrollHeight - scroll_block.getBoundingClientRect().height) {

                    footer.style.display = "block";
                }

                year.textContent = (2013 + number) || 2019;
                next_year.textContent = (2014 + number) || 2020
                if (next_year.textContent === '2021') {
                    next_year.textContent = ''
                }

            } else {


            }
        });
        scroll_block.querySelector('.content_box').addEventListener('scroll', function (e) {
            if (document.documentElement.clientWidth < 1000) {
                let number;
                let width = 0;
                for (let i = 0; i < years_item.length; i++) {
                    if (width < scroll_block.querySelector('.content_box').scrollLeft) {
                    } else {
                        number = i - 1;
                        if (number === -1) {
                            number = 0
                        }
                        document.querySelectorAll('.year_item').forEach(e => {
                            e.classList.remove('_active');
                        })
                        document.querySelectorAll('.year_item')[number].classList.add('_active')
                        break;
                    }
                    width += years_item[i].getBoundingClientRect().width;
                }

                year.textContent = (2013 + number) || 2020;
                next_year.textContent = (2014 + number) || 2021;
                if (next_year.textContent === '2021') {
                    next_year.classList.add('_opa')
                } else {
                    next_year.classList.remove('_opa')
                }
            }
        });
        (function () {
            const scroll_prev = document.querySelector('.scroll_cintrols').querySelector('.arrow_prev')
            const scroll_next = document.querySelector('.scroll_cintrols').querySelector('.arrow_next')
            let i = 0;


            scroll_next.addEventListener('click', function () {
                for (let k = 0; k < document.querySelectorAll('.year_item').length; k++) {
                    if (document.querySelectorAll('.year_item')[k].classList.contains('_active')) {
                        i = k;
                    }
                }
                if (document.documentElement.clientWidth > 1000) {

                    let height = 0;
                    for (let j = 0; j <= i; j++) {
                        height += years_item[j].scrollHeight;

                    }
                    let delta = height - scroll_block.scrollTop;
                    let interval = setInterval(function () {
                        if (delta >= 0) {
                            scroll_block.scrollTop += 5
                            delta -= 5;
                        } else {
                            clearInterval(interval);
                        }
                    }, 6)


                } else {
                    let delta = document.documentElement.clientWidth + 20;
                    let interval = setInterval(function () {
                        if (delta >= 0) {
                            scroll_block.querySelector('.content_box').scrollLeft += 5
                            delta -= 5;
                        } else {
                            clearInterval(interval);
                        }
                    }, 6)
                }
                if (i < years_item.length - 1) {
                    i++;
                }
            })
            scroll_prev.addEventListener('click', function () {
                for (let k = 0; k < document.querySelectorAll('.year_item').length; k++) {
                    if (document.querySelectorAll('.year_item')[k].classList.contains('_active')) {
                        i = k;
                    }
                }
                if (document.documentElement.clientWidth > 1000) {
                    let height = 0;
                    for (let j = 0; j < i - 1; j++) {
                        height += years_item[j].scrollHeight;
                    }
                    let delta = Math.abs(height - scroll_block.scrollTop);
                    console.log(delta);
                    let interval = setInterval(function () {
                        if (delta >= 0) {
                            scroll_block.scrollTop -= 5
                            delta -= 5;
                        } else {
                            clearInterval(interval);
                        }
                    }, 6)


                }
                else {
                    let delta = document.documentElement.clientWidth + 20;
                    let interval = setInterval(function () {
                        if (delta >= 0) {
                            scroll_block.querySelector('.content_box').scrollLeft -= 5
                            delta -= 5;
                        } else {
                            clearInterval(interval);
                        }
                    }, 6)
                }
                if (i > 0) {
                    i--;
                }
            })
        })()
    }
    function video_light_box() {
        $('.play_btn').on('click', function () {

            $('.popup_video').addClass('_active');
            $('.black_href').addClass('_active');
            $('.popup_video>.container').append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/00CJAVkBlJE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>`);
        })
    }
    $(document).ready(function () {
        if ($('.slider_sert').length !== 1) {
            $('.slider_sert').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
            });
        }
        if ($('._popup_sert').length !== 1) {
            $('._popup_sert').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
            });
        }
    });
    function adaptive_tabs() {
        var slider = $('.tabs_slider');
        var sliderIsLive = false;

        if ($('html').width() < 1150) {
            if (sliderIsLive === false) {
                slider.slick({
                    infinite: false,
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    waitForAnimate: false,
                    speed: 300,
                    easing: 'ease',
                    prevArrow: false,
                    arrows: false,
                    variableWidth: true,
                    //centerMode: true,
                    focusOnSelect: true,
                });
                sliderIsLive = true;
            }

        } else {

            if (sliderIsLive === true) {
                slider.slick('unslick');
                sliderIsLive = false;
            }
        }
        $(window).resize(function () {
            if ($('html').width() < 1150) {

                if (sliderIsLive === false) {
                    slider.slick({
                        infinite: false,
                        slidesToScroll: 1,
                        waitForAnimate: false,
                        speed: 300,
                        easing: 'ease',
                        arrows: false,
                        variableWidth: true,
                        prevArrow: false,
                        focusOnSelect: true,
                        centerMode: true,
                    });
                    sliderIsLive = true;
                }
            } else {

                if (sliderIsLive === true) {
                    slider.slick('unslick');
                    sliderIsLive = false;
                }
            }

        });
    }
    adaptive_tabs();
    video_light_box();
    scroll();
    range_calc();
    dynamic_adaptiv();
    tabs();
});

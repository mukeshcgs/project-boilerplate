var rootObj = this;
var rfh = {};
var rangeVal;

var award_data = [{
    "year": "2017",
    "year_data": [{
        "month": "jan",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2017</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2017</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2017</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "feb",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2017</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2017</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2017</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "mar",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2017</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2017</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2017</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "apr",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2017</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2017</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2017</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "may",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jun",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jul",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "aug",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "sep",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "oct",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "nov",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "dec",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2017</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }]
}, {
    "year": "2016",
    "year_data": [{
        "month": "jan",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2016</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2016</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2016</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "feb",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2016</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2016</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2016</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "mar",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2016</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2016</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2016</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "apr",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2016</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2016</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2016</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "may",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jun",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jul",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "aug",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "sep",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "oct",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "nov",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "dec",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2016</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }]
}, {
    "year": "2015",
    "year_data": [{
        "month": "jan",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2015</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2015</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jan 2015</span>Endorsing our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "feb",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2015</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2015</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is feb 2015</span>feb our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "mar",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2015</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2015</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is mar 2015</span>mar our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "apr",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2015</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2015</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is apr 2015</span>apr our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "may",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is may 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jun",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jun 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "jul",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is jul 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "aug",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is aug 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "sep",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is sep 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "oct",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is oct 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "nov",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is nov 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }, {
        "month": "dec",
        "month_data": [{
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }, {
            "logo": "icon1.png",
            "desc": "<span class='cm-line-break'>This is dec 2015</span> our commitment to excellence Reliance Capital wins Award at the World Quality Congress this year."
        }]
    }]
}];


rfh.homeBanner = function () {
    /* Declaration */
    var winH = 0;
    var winW = 0;

    /* Init */
    winH = $(window).height();
    winW = $(window).width();
    $('.bs-banner').height(winH);

    var res = winW / winH;
    id = "first"
    if (res > 1.7) {
        $('.bs-banner video').attr("width", winW);
    } else {
        $('.bs-banner video').attr("height", winH);
    }
}


rfh.headerScroll = function () {

    var scrollPos = 0;
    var winH = $(window).height();
    var footer_height = ($('body').height() - $('.bs-footer').height());

    $(window).scroll(function () {
        scrollPos = $(window).scrollTop();
        if (scrollPos > winH / 2) {
            if ($(window).width() > 768) {
                $(".bs-header").addClass('typ-sticky');
                $(".bs-footer .footer-top").addClass('fixed');
            }
            $('.cm-sticky-top').fadeIn('slow');
        } else {
            if ($(window).width() > 768) {
                $(".bs-header").removeClass('typ-sticky');
                $(".bs-footer .footer-top").removeClass('fixed');
            }
            $('.cm-sticky-top').fadeOut('slow');
        }
        if ($(window).width() > 768) {
            if (scrollPos > ((footer_height - $(window).height()) + 40)) {
                $(".bs-footer .footer-top").removeClass('fixed');
            }
        }
    });
}

rfh.slider = function (obj, opt) {
    rootObj[obj] = new Swiper($(obj).find('.swiper-container'), opt);
}

if ($("#key-slider").length != 0) {
    var opt = {
        speed: 800,
        autoplay: 4000,
        autoHeight: false,
        slidesPerView: 1,
    }
    rfh.slider('#key-slider', opt)
}
if ($("#key-slider2").length != 0) {
    var opt = {
        speed: 400,
        autoplay: 1000,
        autoHeight: false,
        slidesPerView: 1,
    }
    rfh.slider('#key-slider2', opt)
}

function JqueryFunction() {
    new WOW().init();

    /* Header Scroll Js */
    if ($(".bs-header").length != 0) {
        setTimeout(function () {
            rfh.headerScroll();
        }, 2000)
    }
    rfh.headerScroll();

}


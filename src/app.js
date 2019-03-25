$("#main-carousel").carousel({
    interval: 3000
});

$("#explore .carousel-pc").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "#explore .carousel-prev",
    nextArrow: "#explore .carousel-next",
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$("#explore .carousel-sp").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '30px'
});

$("#prepare .carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "#prepare .carousel-prev",
    nextArrow: "#prepare .carousel-next",
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                centerPadding: '30px'
            }
        }
    ]
});

//////////////  Sliders ____________
$(document).ready(function () {

    $('.logo-brand-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 8
            }
        }
    })

    $('.publish-work-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        // stagePadding: 470,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 1
            },
            1000: {
                items: 1,
                stagePadding: 200
            },
            1366: {
                items: 1,
                stagePadding: 400
            }
        }
    });
});


//////////////  Animation ____________

$(document).ready(function () {
    $(".js-ani-wp1").waypoint(function (direction) {

        $(".js-ani-wp1").addClass("animate__animated animate__flipInX")

    }, { offset: "900px" });

    $(".js-ani-wp2").waypoint(function (direction) {

        $(".js-ani-wp2").addClass("animate__animated animate__fadeIn")

    }, { offset: "100%" });

    $(".js-ani-wp3").waypoint(function (direction) {

        $(".js-ani-wp3").addClass("animate__animated animate__flipInX")

    }, { offset: "99%" });

    $(".js-ani-wp4").waypoint(function (direction) {

        $(".js-ani-wp4").addClass("animate__animated animate__flip")

    }, { offset: "99%" });

    $(".js-ani-wp5").waypoint(function (direction) {

        $(".js-ani-wp5").addClass("animate__animated animate__flipInX")

    }, { offset: "99%" });

    $(".js-ani-wp6").waypoint(function (direction) {

        $(".js-ani-wp6").addClass("animate__animated animate__flipInX")

    }, { offset: "99%" });

    $(".js-ani-wp7").waypoint(function (direction) {

        $(".ani-fea1").addClass("animate__animated animate__fadeInLeftBig")
        $(".ani-fea2").addClass("animate__animated animate__fadeInRightBig")
        $(".ani-fea3").addClass("animate__animated animate__fadeInUp")
        $(".ani-fea4").addClass("animate__animated animate__fadeInUpBig")
        $(".ani-fea5").addClass("animate__animated animate__fadeInUpBig")

    }, { offset: "99%" });
});

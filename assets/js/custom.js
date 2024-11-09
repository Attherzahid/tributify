// document.querySelectorAll('.particle-container').forEach(function (container) {

// });


jQuery(document).ready(function () {

    if (window.innerWidth <= 991) {
        jQuery(".header").addClass("active");

        var controller = new ScrollMagic.Controller();

        jQuery('.card-s1').each(function () {
            var card = jQuery(this)[0];
            var cardHeight = jQuery(this).outerHeight();
            new ScrollMagic.Scene({ triggerElement: card, duration: cardHeight, triggerHook: 0.25 })
                .setClassToggle(card, "active")
                // .addIndicators() 
                .addTo(controller);
        });
    } else {
        jQuery(window).scroll(function () {
            var scroll = jQuery(window).scrollTop();

            if (scroll >= 100) {
                jQuery(".header").addClass("active");
            } else {
                jQuery(".header").removeClass("active");
            }
        });
    }


    jQuery('.particle-container').each(function () {
        var containerId = jQuery(this).attr('id');

        var particlesConfig = {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": false,
                        "value_area": 600
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };

        // Customization based on ID
        if (containerId === "particles-4") {
            particlesConfig.particles.number.value = 60;  // Increase particles for container with id "5"
        }
        if (containerId === "particles-5") {
            particlesConfig.particles.number.value = 60;  // Increase particles for container with id "5"
        }

        // Initialize Particles.js with customized settings
        particlesJS(containerId, particlesConfig);
    });

    jQuery('.social-ads-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: 0,
        autoplay: true,
        speed: 500
    });

    let currentIndex = 0;

    setInterval(() => {
        // Select all child divs
        const childDivs = jQuery('.social-media-manage-card .social-boxes > div');
    
        // Remove the toggle class from all divs
        childDivs.removeClass('active');
    
        // Add toggle class to the current div
        jQuery(childDivs[currentIndex]).addClass('active');
    
        // Update currentIndex for the next iteration
        currentIndex = (currentIndex + 1) % childDivs.length;
    }, 2000);

});
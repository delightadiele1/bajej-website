(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
    });
    
})(jQuery);

// JS code
const serviceLinks = document.querySelectorAll('.service-links')
const serviceContent = document.querySelectorAll('.service-content')
const serviceSection = document.querySelector('#service-section')


const clearActiveService = function () {
    console.log("executed")
    serviceLinks.forEach(function(link) {
        link.querySelector('.service-list').classList.remove('active-service')
    })
}

const hideService = function(){
    console.log("executed-2")
    serviceContent.forEach(function(content) {
        console.log(content)
        content.classList.add('hide-content')
    })
}

serviceLinks.forEach(function(link) {
    link.addEventListener('click', e => {
        e.preventDefault()
        clearActiveService()
        hideService()
        const target =  e.currentTarget.querySelector('.service-list')
        target.classList.add('active-service')
        console.log(target.dataset.bsInfo)
        document.querySelector(`.${target.dataset.bsInfo}`).classList.remove('hide-content')
        serviceSection.scrollIntoView({ behavior: 'smooth' })
    })
})




// GSAP Animation

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP Animation for Navbar Brand
 gsap.to(".navbar-brand", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "bounce.out",
    delay: 0.5,
    
  });
// GSAP Animation for navbar-nav
gsap.to(".navbar-nav", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 1.5
});

gsap.to(".fade-out", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 1
});

gsap.to(".about-text", {
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power2.out",
});

// GSAP Animation for header carousel
document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector('#header-carousel');
    if (!carouselElement) return;

    // Reset next slide's content BEFORE it's shown
    carouselElement.addEventListener('slide.bs.carousel', function (e) {
      const nextSlide = e.relatedTarget;
      const text = nextSlide.querySelector('.slide-text');
      const btn = nextSlide.querySelector('.slide-btn');

      if (text) gsap.set(text, { opacity: 0, y: 150 });
      if (btn) gsap.set(btn, { opacity: 0 });
    });

    // Animate slide content AFTER it's visible
    carouselElement.addEventListener('slid.bs.carousel', function (e) {
      animateSlideContent(e.relatedTarget);
    });

    // Animate the first slide on page load
    const firstSlide = carouselElement.querySelector('.carousel-item.active');
    if (firstSlide) animateSlideContent(firstSlide);
  });

  function animateSlideContent(slide) {
    const text = slide.querySelector('.slide-text');
    const btn = slide.querySelector('.slide-btn');

    if (text) {
      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    }

    if (btn) {
      gsap.to(btn, {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "fade.out"
      });
    }
  }


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.about-section').forEach(sec => {
    gsap.to(sec, {
        scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out"
    });
})

gsap.utils.toArray('.service-item').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power1.out",
    });
})

// GSAP Animation from top
gsap.utils.toArray('.animate-from-top').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power1.out",
    });
});

gsap.utils.toArray('.portfolio-summary').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "bounce.out",
    });
});


const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    let countTo = +counter.dataset.target
    let obj = { val : 0}

    gsap.to(obj, {
        val: countTo,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        onUpdate: () => {
            counter.innerText = Math.floor(obj.val)
        },
        onComplete: () => {
            counter.innerText = target;
        }
    })
})

// gsap animation for total projects completed
gsap.utils.toArray('.animate-from-left').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power1.out",
    });
});

gsap.utils.toArray('.animate-from-right').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power1.out",
    });
});

// Animate from down
gsap.utils.toArray('.animate-from-down').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power1.out",
    });
});

// fade in animation
gsap.utils.toArray('fade-in').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power1.out"
    }) 
})

// SPIN ANIMATION
gsap.utils.toArray('.spin-on-hover').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reset"
        },
        rotation: 360,
        duration: 1,
        ease: "power1.out",
        repeat: -1,
        scrub: true
    });
})
'use strict';

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Développement Web",
        "Graphisme",
        "Communication",
        "Audiovisuel"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  });

  // script.js

// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Navigation links animation
    gsap.from('.navbar a', { opacity: 0, y: -30, stagger: 0.2, duration: 1.5, ease: 'power2.out', delay:0.5 });
    gsap.from('.logoimg', { opacity: 0, y: -30, stagger: 0.2, duration: 1.5, ease: 'power2.out', delay:0.7 });
  
    // Home section animation
    gsap.from('.text-2', { opacity: 0, x: -150, duration: 1.5, ease: 'power2.out', delay:1 });
    gsap.from('.text-3', { opacity: 0, y: 300, duration: 1.5, ease: 'power2.out', delay:1.2 });
    gsap.from('.text-4', { opacity: 0, y: 300, duration: 1.5, ease: 'power2.out', delay:1.5 });

    

    gsap.registerPlugin(ScrollTrigger);

  // About section animation
  gsap.to('.imgaymeric', {
    x: 300,
    y: -200, // Ajustez la valeur pour déterminer la distance à déplacer
    opacity: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%', // Ajustez le point de départ de l'animation
      end: 'bottom 60%', // Ajustez le point de fin de l'animation
      scrub: true, // L'option scrub permet de lier l'animation au défilement
    },
  });  gsap.from('.logos', { opacity: 0, y: 100, stagger: 0.2, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.logos', start: 'top 75%', reset: true } });



  // Contact section animation
  gsap.from('.contact-content .column', { opacity: 0, y: 100, stagger: 0.2, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.contact', start: 'top 60%' } });
  gsap.from('.button-area button', { opacity: 0, y: 30, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.contact', start: 'top 60%' } });

  });
/////////////////////
//MODAL//
$('.btn').click(function () {
  $('.mod-fond').fadeIn(200);
  $('.mod-container').removeClass('out').addClass('in');
});

$('.btn2').click(function () {
  $('.mod-fond2').fadeIn(200);
  $('.mod-container2').removeClass('out').addClass('in');
});

$('.btn3').click(function () {
  $('.mod-fond3').fadeIn(200);
  $('.mod-container3').removeClass('out').addClass('in');
});

// Fermer la modale
$('.close, .mod-fond').click(function () {
  $('.mod-fond').fadeOut(200);
  $('.mod-container').removeClass('in').addClass('out');
});

$('.close, .mod-fond2').click(function () {
  $('.mod-fond2').fadeOut(200);
  $('.mod-container2').removeClass('in').addClass('out');
});

$('.close, .mod-fond3').click(function () {
  $('.mod-fond3').fadeOut(200);
  $('.mod-container3').removeClass('in').addClass('out');
});

  ////////////////////////////////////////////////
  gsap.from(".title", {
    x: -100, // Déplacement initial de -100px (gauche)
    opacity: 0, // Opacité initiale à 0
    duration: 1, // Durée de l'animation en secondes
    ease: "power2.out" // Fonction d'accélération pour l'animation
  });

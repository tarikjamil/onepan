document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider1", {
    type: "slider",
    perPage: 3,
    perMove: 1,
    gap: "16rem",
    arrows: false,
    breakpoints: {
      991: {
        // Tablet
        perPage: 2
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        arrows: false
      }
    }
  });
  splide.mount();
});

// product-animation
$(".grid-3els.is--products").each(function (index) {
  let triggerElement = $(this);
  // let myText = $(this).find(".split-text");
  let targetElement = $(".product-link");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0"
    }
  });
});

// product-animation
$(".steps-grid").each(function (index) {
  let triggerElement = $(this);
  // let myText = $(this).find(".split-text");
  let targetElement = $(".step-element");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0"
    }
  });
});

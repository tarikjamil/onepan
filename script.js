// smooth Scroll
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 0.7,
  smoothTouch: false,
  touchMultiplier: 1.2,
  infinite: false
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from(".loading-animation", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.5
  });
}
pageLoad();

//$(".split-line").wrap("<div class='overflow_hidden'></div>");
//$(".is--loadin1").wrap("<div class='overflow-hidden'></div>");

// img parallax
$(".img-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "-15%"
  });
});

// navbar menu hamburger click
$(".navbar-menu-link").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".is--navbar-load", {
      y: "10rem",
      duration: 0.3,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
    gsap.to(".line.is--navbar", {
      duration: 0.3,
      width: "0%",
      opacity: 0,
      ease: "Quint.easeOut",
      delay: 0.1,
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".is--navbar-load",
      {
        y: "10rem",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 0.3,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
    gsap.fromTo(
      ".line.is--navbar",
      {
        width: "0%",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 0.6,
        width: "100%",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
  }
  $(this).data("clicks", !clicks);
});

// scroll text
$(".is--scroll-intoview").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

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
    ease: "Quint.easeOut"
  });
});

// scroll into footer

$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".is--footer-text-animation");

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

// footer-lines
$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".line-vertical");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.fromTo(
    targetElement,
    {
      opacity: 0,
      height: "0%"
    },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      height: "100%",
      ease: "Quint.easeOut",
      stagger: {
        amount: 0.3,
        from: "0"
      }
    }
  );
});

// footer-lines-horizontal
$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".line-horizontal");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.fromTo(
    targetElement,
    {
      opacity: 0,
      width: "0%"
    },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      width: "100%",
      ease: "Quint.easeOut",
      stagger: {
        amount: 0.3,
        from: "0"
      }
    }
  );
});

$(".is--basket").on("click", function () {
  $(".shopify-buy-frame--toggle");
});

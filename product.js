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

$(".is--basket").on("click", function () {
  $(".shopify-buy-frame--toggle").click();
  $(".shopify-buy__cart-toggle").click();
});

$(".is--recoating-popup").on("click", function () {
  $(this)
    .closest(".inline-block")
    .siblings(".pop-up-recoating")
    .find(".trigger-open")
    .click();
});

$(".popup-close-btn").on("click", function () {
  $(this).parent(".pop-up-recoating").find(".trigger-open").click();
});

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.fromTo(
    ".line",
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
}
pageLoad();

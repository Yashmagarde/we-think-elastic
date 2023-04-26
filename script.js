
function a() {

  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
a()


gsap.to("#limg img", {
  opacity: 1,

  stagger: 0.3
})

gsap.to("#limg img", {
  opacity: 0,
  delay: .33,
  stagger: 0.3
})

gsap.to("#loader", {
  top: -900,
  delay: 2.8
})

gsap.to("#nav", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#nav",
    start: "top -1%",
    end: "top -1.1%",
    scrub: 1
  },
  top: -100
})

gsap.to("svg", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#svg",
    start: "top -1%",
    end: "top -1.1%",
    scrub: 1
  },
  top: -100
})

gsap.to("#page1 i", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 i",
    start: "top 2.8%",
    end:"top 2.7%",
    scrub: 1
  },
  top: -100
})
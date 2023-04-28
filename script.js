
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

gsap.to("#page2 video",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page2 video",
      start:"top 100%",
      end:"top -40%",
      scrub:1

  },
  width:`${97}vw`
  })

 

var scroller4 = document.querySelector("#scroller4")
var scroller5 = document.querySelector("#scroller5")
var scroller6 = document.querySelector("#scroller6")

var vid = document.querySelector("#video1")
var vid2 = document.querySelector("#video2")
var d1 = document.querySelector("#d1")
var d2 = document.querySelector("#d2")
var d3 = document.querySelector("#d3")
var page4 = document.querySelector("#page4")
var page5 = document.querySelector("#page5")
var page6 = document.querySelector("#page6")
page4.addEventListener("mousemove",function(dets){
  
  scroller4.style.left=`${dets.x}px`
  scroller4.style.top=`${dets.y}px`
})

page5.addEventListener("mousemove",function(dets){
  
  scroller5.style.left=`${dets.x}px`
  scroller5.style.top=`${dets.y}px`
})

page6.addEventListener("mousemove",function(dets){
  
  scroller6.style.left=`${dets.x}px`
  scroller6.style.top=`${dets.y}px`
})

vid.addEventListener("mouseenter",function(){
  scroller4.style.scale=1
})
vid.addEventListener("mouseleave",function(){
  scroller4.style.scale=0
})

vid2.addEventListener("mouseenter",function(){
  scroller6.style.scale=1
  
})
vid2.addEventListener("mouseleave",function(){
  scroller6.style.scale=0
  
})

d1.addEventListener("mouseenter",function(){
  scroller4.style.scale=1
})
d1.addEventListener("mouseleave",function(){
  scroller4.style.scale=0
})

d2.addEventListener("mouseenter",function(){
  scroller5.style.scale=1
})
d2.addEventListener("mouseleave",function(){
  scroller5.style.scale=0
})

d3.addEventListener("mouseenter",function(){
  scroller5.style.scale=1
})
d3.addEventListener("mouseleave",function(){
  scroller5.style.scale=0
})











gsap.to("#scc h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page8",
    start:"top 0%",
    end:"top -800%",
    scrub:3,
    pin:true
  },
  right:`${5}vw`
})




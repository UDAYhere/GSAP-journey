gsap.from("#page1 #box",{
    scale:0,
    opacity:0,
    duration:1.5,
    rotate:300
})

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:1.5,
    rotate:300,
    scrollTrigger:"#page2 #box"
})

gsap.to("#page3 h1",{
   transform:"translateX(-130%)",
   scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"body",
    start:"top 0%",
    end:"top -150%",
    markers:true,
    scrub:2,
    pin:true
   }
})
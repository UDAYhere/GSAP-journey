gsap.to("#box",{
    x:1200,
    duration:2,
    repeat:-1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor: "white" ,
    yoyo:true

})

gsap.from("#box1",{
    x:1200,
    duration:2,
    repeat:-1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor: "white",
    yoyo:true 

})

gsap.from("#text-hero2",{
    opacity:0,
    color:"pink",
    y:30,
    duration:2,
    delay:1,
    stagger:0.3
    
})

var tl = gsap.timeline();
tl.from("h2",{
    opacity:0,
    y:20,
    duration:0.5,
    delay:0.5,
    scrollTrigger:"h2",
})

tl.from("h4",{
    opacity:0,
    y:20,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})

tl.from(".center-text",{
    opacity:0,
    y:20,
    duration:1,
    scale:0.5
})




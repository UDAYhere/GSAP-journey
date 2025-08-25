let tl=gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.4,
})

tl.from("#full h2",{
    x:150,
    duration:0.3,
    opacity:0,
    stagger:0.3
})

tl.pause();

let menu = document.querySelector("#navbar i");
let cross = document.querySelector("#full i");

menu.addEventListener("click",()=>{
    tl.play();
});

cross.addEventListener("click",()=>{
    tl.reverse();
});